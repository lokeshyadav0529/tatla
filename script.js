/* LOADER */
window.addEventListener("load",()=>{
  const loader=document.getElementById("page-loader");
  if(loader)setTimeout(()=>loader.style.display="none",300);
});

/* MENU */
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
}
function closeMenu(){
  document.getElementById("navMenu").classList.remove("active");
}

/* HERO SLIDER */
const slides=document.querySelectorAll(".slide");
let i=0;
setInterval(()=>{
  slides[i].classList.remove("active");
  i=(i+1)%slides.length;
  slides[i].classList.add("active");
},5000);

/* LIGHTBOX */
function openLightbox(src){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightbox-img").src=src;
}
function closeLightbox(){
  document.getElementById("lightbox").style.display="none";
}

/* WHATSAPP */
function sendWhatsApp(){
  const n=name.value,m=mobile.value,msg=message.value;
  const text=`🌿 New Enquiry – TATLA AGRO\nName:${n}\nMobile:${m}\nMessage:${msg}`;
  window.open("https://wa.me/917878800305?text="+encodeURIComponent(text));
}
