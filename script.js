/* ================= PAGE LOADER ================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) loader.style.display = "none";
});

/* ================= DOM READY ================= */
document.addEventListener("DOMContentLoaded", function () {

  /* ================= HERO SLIDER ================= */
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length > 0) {
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      if (dots.length > 0) {
        dots.forEach(dot => dot.classList.remove("active"));
      }

      slides[index].classList.add("active");

      if (dots.length > 0) {
        dots[index].classList.add("active");
      }

      currentIndex = index;
    }

    // Dot Click Support
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        showSlide(i);
      });
    });

    // Auto Slide
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);
  }

  /* ================= MOBILE MENU ================= */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.querySelector(".menu-overlay");

  if (toggle && menu && overlay) {
    toggle.addEventListener("click", () => {
      menu.classList.add("active");
      overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
      });
    }
  }

  /* ================= SMOOTH SCROLL ================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ================= SCROLL TO TOP ================= */
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ================= HEADER SHADOW ================= */
  const header = document.querySelector(".main-header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.2)";
      } else {
        header.style.background = "rgba(0,0,0,0.35)";
        header.style.boxShadow = "none";
      }
    });
  }

  /* ================= REVEAL ANIMATION ================= */
  const animatedElements = document.querySelectorAll(".animate, .stagger");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

});

/* ================= LIGHTBOX ================= */
function openLightbox(src) {
  const box = document.createElement("div");
  box.style.cssText = `
    position:fixed;inset:0;
    background:rgba(0,0,0,0.9);
    display:flex;justify-content:center;align-items:center;
    z-index:9999;
  `;
  box.innerHTML = `<img src="${src}" style="max-width:90%;max-height:90%">`;
  box.onclick = () => box.remove();
  document.body.appendChild(box);
}

/* ================= WHATSAPP ================= */
function sendWhatsApp() {
  const name = document.getElementById("name")?.value || "";
  const mobile = document.getElementById("mobile")?.value || "";
  const msg = document.getElementById("message")?.value || "";

  const text = encodeURIComponent(
    `Name: ${name}\nMobile: ${mobile}\nMessage: ${msg}`
  );

  const url = `https://wa.me/917878800305?text=${text}`;
  window.open(url, "_blank");
}
const scrollBtn = document.getElementById("scrollTopBtn");
const mapSection = document.querySelector(".contact-map");

window.addEventListener("scroll", () => {
  const mapTop = mapSection.offsetTop;
  const scrollY = window.scrollY;

  if (scrollY >= mapTop - 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Smooth scroll
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
