/* =========================
   LOADER
========================= */
window.addEventListener("load", function(){
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 900);
});

/* =========================
   SCROLL PROGRESS BAR
========================= */
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.scrollHeight - window.innerHeight;
  let progress = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

/* =========================
   MOBILE MENU
========================= */
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
}

function closeMenu(){
  document.getElementById("navMenu").classList.remove("active");
}

/* =========================
   HERO SLIDER
========================= */
let slides = document.querySelectorAll(".slide");
let index = 0;

if(slides.length > 0){
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

/* =========================
   LIGHTBOX
========================= */
function openLightbox(src){
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeLightbox();
});

/* =========================
   WHATSAPP FORM
========================= */
function sendWhatsApp(){
  let name = document.getElementById("name").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let msg = document.getElementById("message").value.trim();

  if(name === "" || mobile === ""){
    alert("Please enter name and mobile number");
    return;
  }

  let text =
    "🌿 New Enquiry – TATLA AGRO 🌿\n" +
    "Name: " + name + "\n" +
    "Mobile: " + mobile + "\n" +
    "Message: " + msg;

  window.open(
    "https://wa.me/917878800305?text=" + encodeURIComponent(text),
    "_blank"
  );
}

/* =========================
   LUXURY SCROLL REVEAL
========================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  let windowHeight = window.innerHeight;
  let revealPoint = 120;

  reveals.forEach(el => {
    let elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - revealPoint){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
/* TEXT SPLIT */
document.querySelectorAll(".split-text").forEach(text => {
  let words = text.innerText.split(" ");
  text.innerHTML = "";

  words.forEach((word, i) => {
    let span = document.createElement("span");
    span.innerText = word + " ";
    span.style.animationDelay = i * 0.08 + "s";
    text.appendChild(span);
  });
});
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rotateX = -(y / r.height - 0.5) * 10;
    const rotateY = (x / r.width - 0.5) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);
const slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 5000);
}








