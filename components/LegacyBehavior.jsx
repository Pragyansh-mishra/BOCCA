'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';

let scriptsPromise;

function loadLegacyScripts() {
  if (!scriptsPromise) {
    scriptsPromise = new Promise((resolve, reject) => {
      const data = document.createElement('script');
      data.src = '/js/data.js';
      data.onload = () => {
        const controller = document.createElement('script');
        controller.src = '/js/main.js';
        controller.onload = resolve;
        controller.onerror = reject;
        document.body.appendChild(controller);
      };
      data.onerror = reject;
      document.body.appendChild(data);
    }).catch((error) => {
      scriptsPromise = undefined;
      throw error;
    });
  }
  return scriptsPromise;
}

export default function LegacyBehavior({ pageKey }) {
  useEffect(() => {
    let active = true;
    let drawer;
    let page;
    let links;
    let lenis;
    let isOpen = false;
    let opener;
    let closeAction;
    let previousFocus;
    let removeNavHandlers = [];

    const finishClose = () => {
      if (isOpen || !drawer) return;
      drawer.classList.remove('active');
      document.getElementById('overlayBackdrop')?.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
      document.getElementById('openMenuBtn')?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      lenis?.start();
      gsap.set(drawer, { clearProps: 'transform,opacity,visibility' });
      gsap.set(document.querySelector('.newspaper-wrapper'), { clearProps: 'transform,transformOrigin' });
      const action = closeAction;
      closeAction = undefined;
      if (action) action();
      else if (previousFocus?.isConnected) previousFocus.focus();
    };

    const animateMenuDrawer = (open, onClosed) => {
      if (!drawer || !page) return;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const duration = reducedMotion ? 0 : 0.72;
      if (open) {
        if (isOpen) return;
        isOpen = true;
        closeAction = undefined;
        previousFocus = document.activeElement;
        window.closeCartDrawer?.();
        window.closeReservationModal?.();
        drawer.classList.add('active');
        drawer.setAttribute('aria-hidden', 'false');
        document.getElementById('overlayBackdrop')?.classList.add('active');
        opener?.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        lenis?.stop();
        gsap.killTweensOf([drawer, page, ...links]);
        gsap.to(drawer, { x: 0, autoAlpha: 1, duration, ease: 'power4.out' });
        gsap.to(page, {
          x: Math.min(window.innerWidth * (window.innerWidth <= 700 ? 0.72 : 0.36), window.innerWidth * 0.48),
          rotation: window.innerWidth <= 700 ? 1.5 : 3.2,
          scale: 0.97,
          transformOrigin: 'left center',
          duration: reducedMotion ? 0 : 0.82,
          ease: 'power3.inOut',
        });
        gsap.to(links, { y: 0, autoAlpha: 1, duration: reducedMotion ? 0 : 0.42, stagger: reducedMotion ? 0 : 0.075, ease: 'power3.out', delay: reducedMotion ? 0 : 0.16 });
        window.setTimeout(() => document.getElementById('closeMenuBtn')?.focus(), 20);
        return;
      }

      if (!isOpen) return;
      isOpen = false;
      closeAction = onClosed;
      gsap.killTweensOf([drawer, page, ...links]);
      gsap.to(drawer, { x: -drawer.offsetWidth - 2, autoAlpha: 0, duration, ease: 'power3.inOut', onComplete: finishClose });
      gsap.to(page, { x: 0, rotation: 0, scale: 1, duration: reducedMotion ? 0 : 0.68, ease: 'power3.inOut' });
      gsap.to(links, { y: 14, autoAlpha: 0, duration: reducedMotion ? 0 : 0.2, stagger: reducedMotion ? 0 : 0.025, ease: 'power2.in' });
    };

    const installMenuMotion = () => {
      drawer = document.getElementById('menuDrawer');
      opener = document.getElementById('openMenuBtn');
      page = document.querySelector('.newspaper-wrapper');
      const overlay = document.getElementById('overlayBackdrop');
      const closeButton = document.getElementById('closeMenuBtn');
      if (!drawer || !opener || !page) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      links = drawer.querySelectorAll('.drawer-nav-link');
      drawer.setAttribute('role', 'dialog');
      drawer.setAttribute('aria-modal', 'true');
      drawer.setAttribute('aria-label', 'Main navigation');
      drawer.setAttribute('aria-hidden', 'true');
      opener.setAttribute('aria-expanded', 'false');
      closeButton?.setAttribute('aria-label', 'Close navigation menu');
      document.body.dataset.menuMotionBound = 'true';
      opener.removeAttribute('onclick');
      closeButton?.removeAttribute('onclick');
      links.forEach((link) => link.removeAttribute('onclick'));
      [opener, closeButton].filter(Boolean).forEach((button) => {
        button.dataset.menuMotionBound = 'true';
      });

      gsap.set(drawer, { x: -drawer.offsetWidth - 2, autoAlpha: 0 });
      gsap.set(links, { y: 20, autoAlpha: 0 });

      const onOpenClick = (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        animateMenuDrawer(true);
      };
      const onCloseClick = (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        animateMenuDrawer(false);
      };
      opener.addEventListener('click', onOpenClick, true);
      closeButton?.addEventListener('click', onCloseClick, true);
      removeNavHandlers.push(() => opener.removeEventListener('click', onOpenClick, true));
      removeNavHandlers.push(() => closeButton?.removeEventListener('click', onCloseClick, true));

      const onNavClick = (event) => {
        const link = event.currentTarget;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        const href = link.getAttribute('href');
        animateMenuDrawer(false, () => {
          if (href?.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) lenis?.scrollTo(target, { offset: -20, duration: reducedMotion ? 0 : 1.1 });
          } else if (href) {
            window.location.assign(new URL(href, window.location.href).href);
          }
        });
      };
      links.forEach((link) => {
        link.addEventListener('click', onNavClick, true);
        removeNavHandlers.push(() => link.removeEventListener('click', onNavClick, true));
      });

      const onKeyDown = (event) => {
        if (!isOpen) return;
        if (event.key === 'Escape') {
          event.preventDefault();
          event.stopImmediatePropagation();
          animateMenuDrawer(false);
        } else if (event.key === 'Tab') {
          const focusable = drawer.querySelectorAll('button:not([disabled]), a[href]');
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }
      };
      document.addEventListener('keydown', onKeyDown, true);
      removeNavHandlers.push(() => document.removeEventListener('keydown', onKeyDown, true));
      const onOverlayClick = (event) => {
        event.stopImmediatePropagation();
        animateMenuDrawer(false);
      };
      overlay?.addEventListener('click', onOverlayClick, true);
      removeNavHandlers.push(() => overlay?.removeEventListener('click', onOverlayClick, true));
    };

    lenis = new Lenis({ autoRaf: true, smoothWheel: true, lerp: 0.09 });
    loadLegacyScripts().then(() => {
      if (active) {
        installMenuMotion();
        window.initDaMaria?.();
      }
    }).catch((error) => console.error('Unable to load the legacy site behavior.', error));

    return () => {
      active = false;
      window.destroyDaMaria?.();
      removeNavHandlers.forEach((remove) => remove());
      if (drawer) gsap.killTweensOf([drawer, page, ...links]);
      if (drawer) {
        drawer.classList.remove('active');
        drawer.setAttribute('aria-hidden', 'true');
        gsap.set(drawer, { clearProps: 'transform,opacity,visibility' });
      }
      gsap.set(document.querySelector('.newspaper-wrapper'), { clearProps: 'transform,transformOrigin' });
      document.getElementById('overlayBackdrop')?.classList.remove('active');
      document.body.style.overflow = '';
      lenis?.destroy();
      delete document.body.dataset.menuMotionBound;
    };
  }, [pageKey]);

  return null;
}
