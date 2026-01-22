
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
  const menu = document.getElementById("navMenu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function closeMenu() {
  document.getElementById("navMenu").style.display = "none";
}

/* =====

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

  let url = `https://wa.me/917878800305?text=
Name: ${name}%0A
Mobile: ${mobile}%0A
Message: ${msg}`;

  window.open(url, "_blank");
}

