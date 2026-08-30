// ---------- Hamburger Menu (same as other pages) ----------
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
  navMenu.classList.toggle('nav-open');
  menuToggle.classList.toggle('active');
});

// ---------- Search box: agar user yahan search kare, use homepage par bhej do ----------
const searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== '') {
        window.location.href = 'index.html?search=' + encodeURIComponent(searchTerm);
      }
    }
  });
}
// ---------- Contact Form Submit Handling ----------
const contactForm = document.getElementById('contactForm');
const formConfirmation = document.getElementById('formConfirmation');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Page ko reload hone se rokta hai

    // Abhi ke liye hum sirf "Thank you" message dikhayenge
    // (Aage hum ise real email service se connect kar sakte hain)
    formConfirmation.style.display = 'block';
    contactForm.reset(); // Form ko khaali kar deta hai
  });
}