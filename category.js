// ---------- Hamburger Menu (same as script.js) ----------
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
  navMenu.classList.toggle('nav-open');
  menuToggle.classList.toggle('active');
});

// ---------- Build one product card (same as script.js) ----------
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

// ---------- Render a list of products into a container ----------
function renderProducts(productsArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = productsArray.map(createProductCard).join('');
}

// ---------- Figure out which category this page belongs to ----------
// This reads the current page's filename (e.g. "electronics.html")
// and uses it to know which category to filter.

const currentPage = window.location.pathname.split('/').pop(); // e.g. "electronics.html"

const pageCategoryMap = {
  'electronics.html': 'electronics',
  'fashion.html': 'fashion',
  'home-kitchen.html': 'home-kitchen',
  'beauty.html': 'beauty'
};

const currentCategory = pageCategoryMap[currentPage];

// ---------- Filter products by that category ----------
const filteredProducts = allProducts.filter(function (product) {
  return product.category === currentCategory;
});

// ---------- Show the filtered products ----------
renderProducts(filteredProducts, 'productGrid');