/* ==========================================================================
   DA MARIA - MAIN CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMarquee();
  initCart();
  initReservationForm();
  initPantryRender();
  initParallaxEffects();
  setupGlobalEvents();
});

/* --------------------------------------------------------------------------
   1. Seamless Marquee Cloner
   -------------------------------------------------------------------------- */
function initMarquee() {
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (!marqueeTrack) return;

  // Duplicate items to guarantee infinite seamless wrap
  const originalHTML = marqueeTrack.innerHTML;
  marqueeTrack.innerHTML = originalHTML + originalHTML;
}

/* --------------------------------------------------------------------------
   2. Global Drawers, Modals & Overlay Controller
   -------------------------------------------------------------------------- */
function closeAllModals() {
  const overlay = document.getElementById('overlayBackdrop');
  const menuDrawer = document.getElementById('menuDrawer');
  const cartDrawer = document.getElementById('cartDrawer');
  const reservationModal = document.getElementById('reservationModal');

  if (overlay) overlay.classList.remove('active');
  if (menuDrawer) menuDrawer.classList.remove('active');
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (reservationModal) reservationModal.classList.remove('active');
  document.body.style.overflow = '';
}

window.closeAllModals = closeAllModals;

window.openMenuDrawer = function() {
  closeAllModals();
  const overlay = document.getElementById('overlayBackdrop');
  const menuDrawer = document.getElementById('menuDrawer');
  if (menuDrawer) menuDrawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeMenuDrawer = function() {
  const overlay = document.getElementById('overlayBackdrop');
  const menuDrawer = document.getElementById('menuDrawer');
  if (menuDrawer) menuDrawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

window.openCartDrawer = function() {
  closeAllModals();
  const overlay = document.getElementById('overlayBackdrop');
  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer) cartDrawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCartDrawer = function() {
  const overlay = document.getElementById('overlayBackdrop');
  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

window.openReservationModal = function() {
  closeAllModals();
  const overlay = document.getElementById('overlayBackdrop');
  const reservationModal = document.getElementById('reservationModal');
  if (reservationModal) reservationModal.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeReservationModal = function() {
  const overlay = document.getElementById('overlayBackdrop');
  const reservationModal = document.getElementById('reservationModal');
  if (reservationModal) reservationModal.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

function setupGlobalEvents() {
  const overlay = document.getElementById('overlayBackdrop');
  if (overlay) {
    overlay.addEventListener('click', closeAllModals);
  }

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

/* --------------------------------------------------------------------------
   3. Pantry Products Dynamic Render
   -------------------------------------------------------------------------- */
function initPantryRender() {
  const pantryGrid = document.getElementById('pantryGrid');
  if (!pantryGrid || typeof PANTRY_PRODUCTS === 'undefined') return;

  pantryGrid.innerHTML = PANTRY_PRODUCTS.map(product => `
    <div class="pantry-card" data-id="${product.id}">
      <div class="pantry-card-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
      </div>
      <div>
        <h4 class="pantry-card-title">${product.title}</h4>
        <p class="pantry-card-desc">${product.desc}</p>
      </div>
      <div class="pantry-card-footer">
        <span class="pantry-price">$${product.price.toFixed(2)}</span>
        <button type="button" class="btn-add-cart" onclick="addToCart('${product.id}')">
          Add to Cart +
        </button>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Cart Management System
   -------------------------------------------------------------------------- */
let cart = [];

function initCart() {
  const saved = localStorage.getItem('da_maria_cart');
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch (e) {
      cart = [];
    }
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('da_maria_cart', JSON.stringify(cart));
  updateCartUI();
}

window.addToCart = function(productId) {
  if (typeof PANTRY_PRODUCTS === 'undefined') return;
  const product = PANTRY_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  showToast(`Added "${product.title}" to your pantry order.`);

  // Pulse badge animation
  const badge = document.getElementById('cartCountPill');
  if (badge) {
    badge.classList.remove('badge-pulse');
    void badge.offsetWidth; // trigger reflow
    badge.classList.add('badge-pulse');
  }
};

window.changeCartQty = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
};

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartCountPill');
  if (badge) {
    badge.textContent = totalCount;
  }

  const container = document.getElementById('cartItemsContainer');
  const subtotalDisplay = document.getElementById('cartSubtotalDisplay');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <p>Your pantry basket is currently empty.</p>
        <span style="font-size: 0.85rem; color: #888; display: block; margin-top: 6px;">Browse our artisanal Italian provisions below.</span>
      </div>
    `;
    if (subtotalDisplay) subtotalDisplay.textContent = '$0.00';
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (subtotalDisplay) subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;

  container.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
      </div>
      <div class="cart-item-actions">
        <button type="button" class="cart-qty-btn" onclick="changeCartQty('${item.id}', -1)">-</button>
        <span class="cart-qty-display">${item.quantity}</span>
        <button type="button" class="cart-qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join('');
}

window.handleCheckout = function() {
  if (cart.length === 0) {
    showToast('Your basket is empty. Please add artisanal provisions first.');
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  showToast(`Grazie! Order of $${total.toFixed(2)} received. Preparation in Rome beginning!`);
  cart = [];
  saveCart();
  closeAllModals();
};

/* --------------------------------------------------------------------------
   5. Reservation Form Handling
   -------------------------------------------------------------------------- */
function initReservationForm() {
  const forms = document.querySelectorAll('.reservation-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="name"]')?.value || 'Guest';
      const guests = form.querySelector('[name="people"]')?.value || '2 Persons';

      showToast(`Grazie Mille, ${name}! Table reserved for ${guests}.`);
      form.reset();

      // Close modal if open
      const modal = document.getElementById('reservationModal');
      if (modal && modal.classList.contains('active')) {
        setTimeout(() => {
          closeAllModals();
        }, 1200);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Toast Notice Helper
   -------------------------------------------------------------------------- */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>🍷</span> <span>${message}</span>`;
  toast.classList.add('active');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
}

/* --------------------------------------------------------------------------
   7. Mousemove Parallax Hover Reaction
   -------------------------------------------------------------------------- */
function initParallaxEffects() {
  const heroFrame = document.querySelector('.hero-image-frame');
  if (!heroFrame) return;

  const heroImg = heroFrame.querySelector('img');
  if (!heroImg) return;

  heroFrame.addEventListener('mousemove', (e) => {
    const rect = heroFrame.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroImg.style.transform = `scale(1.05) translate(${x * -16}px, ${y * -16}px)`;
  });

  heroFrame.addEventListener('mouseleave', () => {
    heroImg.style.transform = 'scale(1) translate(0, 0)';
  });
}
