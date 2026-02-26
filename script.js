/* ================= LOADER ================= */
window.addEventListener("load", () => {
  document.getElementById("page-loader").style.display = "none";
});

/* ================= HERO SLIDER ================= */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

/* ================= MOBILE MENU ================= */
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("navMenu").classList.remove("active");
}

/* ================= SCROLL PROGRESS ================= */
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width =
    (scrollTop / height) * 100 + "%";
});

/* ================= REVEAL ANIMATION ================= */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((r) => {
    let top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      r.classList.add("active");
    }
  });
});

/* ================= LIGHTBOX ================= */
function openLightbox(src) {
  let box = document.createElement("div");
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
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let msg = document.getElementById("message").value;

let text = encodeURIComponent(`Name: ${name}
Mobile: ${mobile}
Message: ${msg}`);

let url = `https://wa.me/917878800305?text=${text}`;
  window.open(url, "_blank");
}
// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
  });
});

// PARALLAX EFFECT
window.addEventListener("scroll",()=>{
  const hero = document.querySelector(".hero-video");
  let offset = window.pageYOffset;
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});
/* ================= SCROLL TO TOP ================= */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

function scrollToTop(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}
/* ================= ULTRA SMOOTH SCROLL ================= */
function scrollToTop() {
  const start = window.pageYOffset;
  const duration = 900;
  const startTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}
/* HEADER SHADOW ON SCROLL */
window.addEventListener("scroll",()=>{
  const header = document.querySelector(".main-header");
  if(window.scrollY > 50){
    header.style.boxShadow = "0 8px 30px rgba(0,0,0,.15)";
  } else {
    header.style.boxShadow = "none";
  }
});
/* ================= PREMIUM SCROLL ANIMATION ================= */

const animatedElements = document.querySelectorAll(".animate, .stagger");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
function filterGallery(category){
  const items = document.querySelectorAll(".gallery-card");
  const buttons = document.querySelectorAll(".gallery-filters button");

  buttons.forEach(btn=>btn.classList.remove("active"));
  event.target.classList.add("active");

  items.forEach(item=>{
    if(category === "all"){
      item.style.display="block";
    } else {
      item.style.display = item.classList.contains(category) ? "block" : "none";
    }
  });
}
const cards = document.querySelectorAll(".gallery-card");

window.addEventListener("scroll", ()=>{
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < trigger){
      card.classList.add("show");
    }
  });
});
// Wait until DOM fully loads
document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length === 0) return; // safety check

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    if (dots.length > 0) {
      dots.forEach((dot) => dot.classList.remove("active"));
    }

    slides[index].classList.add("active");

    if (dots.length > 0) {
      dots[index].classList.add("active");
    }

    currentIndex = index;
  }

  // Dot click support
  if (dots.length > 0) {
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        showSlide(i);
      });
    });
  }

  // Auto Slide every 5 sec
  setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }, 5000);

});

document.addEventListener("DOMContentLoaded", function () {

    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[i].classList.add("active");
        dots[i].classList.add("active");

        index = i;
    }

    window.currentSlide = function(i) {
        showSlide(i);
    }

    function autoSlide() {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        showSlide(index);
    }

    setInterval(autoSlide, 5000);

});
