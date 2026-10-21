/* ==========================================================================
   BOCCA ITALIAN COFFEE & PIZZA HOUSE
   Application Logic, Menu Rendering, Search, and Mobile Navigation
   Dungarpur, Rajasthan, India
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  populateBusinessInfo();
  initMobileNavigation();
  initHomepageRender();
  initMenuPageRender();
});

/* --------------------------------------------------------------------------
   1. Populate Business Information Globally from Central Config
   -------------------------------------------------------------------------- */
function populateBusinessInfo() {
  if (typeof BUSINESS_CONFIG === 'undefined') return;

  // Phone links
  document.querySelectorAll('.data-phone-link').forEach(el => {
    el.href = BUSINESS_CONFIG.phoneTelLink;
    el.textContent = BUSINESS_CONFIG.phoneDisplay;
  });

  // Maps links
  document.querySelectorAll('.data-maps-link').forEach(el => {
    el.href = BUSINESS_CONFIG.mapsUrl;
  });

  // Zomato links
  document.querySelectorAll('.data-zomato-link').forEach(el => {
    el.href = BUSINESS_CONFIG.zomatoUrl;
  });

  // Address
  document.querySelectorAll('.data-address').forEach(el => {
    el.textContent = BUSINESS_CONFIG.address;
  });

  // Hours
  document.querySelectorAll('.data-hours').forEach(el => {
    el.textContent = BUSINESS_CONFIG.hours;
  });

  // Current year
  document.querySelectorAll('.data-current-year').forEach(el => {
    el.textContent = BUSINESS_CONFIG.currentYear;
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const openBtn = document.getElementById('openMobileNav');
  const closeBtn = document.getElementById('closeMobileNav');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');

  function openDrawer() {
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   3. Homepage Dynamic Sections Render
   -------------------------------------------------------------------------- */
function initHomepageRender() {
  // 1. Featured Categories
  const catGrid = document.getElementById('featuredCategoriesGrid');
  if (catGrid && typeof FEATURED_CATEGORIES !== 'undefined') {
    catGrid.innerHTML = FEATURED_CATEGORIES.map(cat => `
      <a href="menu.html?category=${cat.id}" class="category-tile-card">
        <div class="category-tile-image">
          <img src="${cat.image}" alt="${cat.name} at BOCCA" loading="lazy">
        </div>
        <div class="category-tile-content">
          <h3 class="category-tile-title">${cat.name}</h3>
          <span class="category-tile-count">${cat.count}</span>
        </div>
      </a>
    `).join('');
  }

  // 2. Signature Selections
  const sigGrid = document.getElementById('signatureSelectionsGrid');
  if (sigGrid && typeof SIGNATURE_SELECTIONS !== 'undefined' && typeof MENU_ITEMS !== 'undefined') {
    const signatureItems = SIGNATURE_SELECTIONS.map(id => MENU_ITEMS.find(item => item.id === id)).filter(Boolean);
    
    sigGrid.innerHTML = signatureItems.map(item => `
      <div class="item-card">
        <div class="item-card-image-wrap">
          ${item.badge ? `<span class="item-badge-pill">${item.badge}</span>` : ''}
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div>
          <span class="item-category-tag">${item.categoryName}</span>
          <h3 class="item-name">${item.name}</h3>
          <p class="item-desc">${item.desc}</p>
        </div>
        <div class="item-card-actions">
          <span class="item-status-tag">Freshly Prepared</span>
          <a href="${BUSINESS_CONFIG.zomatoUrl}" target="_blank" rel="noopener" class="btn-location-action secondary" style="padding: 6px 14px; font-size: 0.8rem;">
            Order Online
          </a>
        </div>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   4. Menu Page Render, Filtering & Search
   -------------------------------------------------------------------------- */
function initMenuPageRender() {
  const menuContainer = document.getElementById('menuResultsGrid');
  if (!menuContainer || typeof MENU_ITEMS === 'undefined' || typeof MENU_CATEGORIES === 'undefined') return;

  const searchInput = document.getElementById('menuSearchInput');
  const pillsContainer = document.getElementById('categoryPillsContainer');
  const countBadge = document.getElementById('menuResultsCount');

  // Check URL query parameters (e.g. ?category=pizza)
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'all';
  let searchQuery = '';

  // Render Category Filter Pills
  if (pillsContainer) {
    pillsContainer.innerHTML = MENU_CATEGORIES.map(cat => {
      const count = cat.id === 'all' 
        ? MENU_ITEMS.length 
        : MENU_ITEMS.filter(i => i.categoryId === cat.id).length;

      return `
        <button type="button" 
                class="category-filter-btn ${cat.id === activeCategory ? 'active' : ''}" 
                data-category="${cat.id}">
          <span>${cat.icon}</span>
          <span>${cat.name}</span>
          <span style="opacity: 0.7; font-size: 0.78rem;">(${count})</span>
        </button>
      `;
    }).join('');

    // Attach click listeners
    pillsContainer.querySelectorAll('.category-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        pillsContainer.querySelectorAll('.category-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category');
        renderFilteredItems();
      });
    });
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderFilteredItems();
    });
  }

  function renderFilteredItems() {
    let filtered = MENU_ITEMS;

    // Filter by Category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.categoryId === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchQuery) ||
        item.desc.toLowerCase().includes(searchQuery) ||
        item.categoryName.toLowerCase().includes(searchQuery)
      );
    }

    // Update count badge
    if (countBadge) {
      countBadge.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;
    }

    // Empty State
    if (filtered.length === 0) {
      menuContainer.innerHTML = `
        <div class="empty-results-box">
          <h3>No matching items found</h3>
          <p style="color: var(--bocca-text-muted); margin-bottom: 20px;">
            We couldn't find any menu items matching "${searchQuery}". Try searching for Margherita, Alfredo, Cappuccino, or Nutella.
          </p>
          <button type="button" class="btn-hero-primary" onclick="resetMenuSearch()">
            View Full Menu
          </button>
        </div>
      `;
      return;
    }

    // Render Cards
    menuContainer.innerHTML = filtered.map(item => `
      <div class="item-card" data-category="${item.categoryId}">
        <div class="item-card-image-wrap">
          ${item.badge ? `<span class="item-badge-pill">${item.badge}</span>` : ''}
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div>
          <span class="item-category-tag">${item.categoryName}</span>
          <h3 class="item-name">${item.name}</h3>
          <p class="item-desc">${item.desc}</p>
        </div>
        <div class="item-card-actions">
          <span class="item-status-tag">Freshly Prepared</span>
          <a href="${BUSINESS_CONFIG.zomatoUrl}" target="_blank" rel="noopener" class="btn-location-action secondary" style="padding: 6px 14px; font-size: 0.8rem;">
            Order Online
          </a>
        </div>
      </div>
    `).join('');
  }

  window.resetMenuSearch = function() {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    activeCategory = 'all';
    if (pillsContainer) {
      pillsContainer.querySelectorAll('.category-filter-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-category') === 'all');
      });
    }
    renderFilteredItems();
  };

  // Initial render
  renderFilteredItems();
}
