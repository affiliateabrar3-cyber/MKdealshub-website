// ---------- Hamburger Menu (same as other pages) ----------
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
  navMenu.classList.toggle('nav-open');
  menuToggle.classList.toggle('active');
});

// ---------- Build one product card (same as other pages) ----------
function createProductCard(product) {
  return `
    <div class="product-card">
      <a href="product.html?id=${product.id}" class="product-card-link">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">₹${product.price}</p>
        </div>
      </a>
      <div class="product-info-bottom">
        <a href="${product.affiliateLink}" class="check-deal-btn" target="_blank" rel="nofollow sponsored noopener">Check Deal</a>
      </div>
    </div>
  `;
}

// ---------- Render products into a container ----------
function renderProducts(productsArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = productsArray.map(createProductCard).join('');
}

// ---------- Filter only trending products ----------
const trendingProducts = allProducts.filter(function (product) {
  return product.trending === true;
});

// ---------- Show trending products ----------
renderProducts(trendingProducts, 'productGrid');