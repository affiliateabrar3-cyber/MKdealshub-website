// ---------- Hamburger Menu (same as other pages) ----------
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
  navMenu.classList.toggle('nav-open');
  menuToggle.classList.toggle('active');
});

// ---------- Get the product ID from the URL ----------
// Example URL: product.html?id=1
// This code reads the "?id=1" part and extracts just the number "1"

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// ---------- Find the matching product from our data ----------
const product = allProducts.find(function (p) {
  return p.id === productId;
});

// ---------- Show the product details on the page ----------
const container = document.getElementById('productDetailContainer');

if (product) {
  // Agar product mil gaya, to uski details dikhao
  document.getElementById('pageTitle').textContent = product.name + ' - MKdealshub';

  container.innerHTML = `
    <div class="product-detail-card">
      <img src="${product.image}" alt="${product.name}" class="product-detail-img">
      <div class="product-detail-info">
        <h1>${product.name}</h1>
        <p class="product-detail-price">₹${product.price}</p>
        <p class="product-detail-category">Category: ${product.category}</p>
        <a href="${product.affiliateLink}" class="check-deal-btn-large" target="_blank" rel="nofollow sponsored noopener">Check Deal</a>
        <p class="affiliate-note">As an affiliate, we may earn a commission on qualifying purchases, at no extra cost to you.</p>
      </div>
    </div>
  `;
} else {
  // Agar product na mile (galat ID ya missing), to error message dikhao
  container.innerHTML = `
    <div class="product-not-found">
      <h2>Product not found</h2>
      <p>Sorry, we couldn't find this product. <a href="index.html">Go back to Home</a></p>
    </div>
  `;
}