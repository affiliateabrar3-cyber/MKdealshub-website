// ---------- Hamburger Menu (from Step 5) ----------
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
  navMenu.classList.toggle('nav-open');
  menuToggle.classList.toggle('active');
});

// ---------- Build Product Cards Automatically ----------

// This function takes one product's details and turns it into HTML card code
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

// This function finds the productGrid container and fills it with cards
function renderProducts(productsArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return; // safety check, does nothing if container not found

  container.innerHTML = productsArray.map(createProductCard).join('');
}

// On the homepage, show all products in the "productGrid" container
renderProducts(allProducts, 'productGrid');
// ---------- Products under ₹499 ----------
const under499Products = allProducts.filter(function (product) {
  return product.price < 499;
});
renderProducts(under499Products, 'under499Grid');

// ---------- Products under ₹999 ----------
const under999Products = allProducts.filter(function (product) {
  return product.price < 999;
});
renderProducts(under999Products, 'under999Grid');
// ---------- Search Functionality ----------
const searchInput = document.getElementById('searchInput');
const sectionTitle = document.getElementById('sectionTitle');
const noResultsMsg = document.getElementById('noResultsMsg');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === '') {
    // Agar search box khaali hai, to wapas normal "Popular Picks" dikhao
    sectionTitle.textContent = 'Popular Picks';
    noResultsMsg.style.display = 'none';
    renderProducts(allProducts, 'productGrid');
    return;
  }

  // Product name mein search term dhoondo (case-insensitive)
  const searchResults = allProducts.filter(function (product) {
    return product.name.toLowerCase().includes(searchTerm);
  });

  sectionTitle.textContent = 'Search Results';

  if (searchResults.length === 0) {
    noResultsMsg.style.display = 'block';
  } else {
    noResultsMsg.style.display = 'none';
  }

  renderProducts(searchResults, 'productGrid');
});
