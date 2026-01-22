/* =========================
   SAFE PAGE LOADER
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }
});

/* FALLBACK – agar load event fail ho */
setTimeout(() => {
  const loader = document.getElementById("page-loader");
  if (loader) loader.style.display = "none";
}, 3000);


/* =========================
   MOBILE MENU
========================= */
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("navMenu").classList.remove("active");
}


/* =========================
   HERO SLIDER (SINGLE INSTANCE)
========================= */
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

if (slides.length > 0) {
  slides[0].classList.add("active");

  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 5000);
}


/* =========================
   LIGHTBOX
========================= */
function openLightbox(src) {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  if (box && img) {
    img.src = src;
    box.style.display = "flex";
  }
}

function closeLightbox() {
  const box = document.getElementById("lightbox");
  if (box) box.style.display = "none";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});


/* =========================
   WHATSAPP FORM
========================= */
function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const msg = document.getElementById("message").value.trim();

  if (!name || !mobile) {
    alert("Please enter name and mobile number");
    return;
  }

  const text =
    `🌿 New Enquiry – TATLA AGRO 🌿\n` +
    `Name: ${name}\n` +
    `Mobile: ${mobile}\n` +
    `Message: ${msg}`;

  window.open(
    "https://wa.me/917878800305?text=" + encodeURIComponent(text),
    "_blank"
  );
}
