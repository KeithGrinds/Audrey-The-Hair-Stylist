// Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click",()=>{
  navMenu.classList.toggle("active");
});

// Dark Mode
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("light-mode");
});

// Parallax Converging Effect
const text = document.querySelector(".parallax-text");
const img = document.querySelector(".parallax-img");

window.addEventListener("scroll",()=>{
  let scroll = window.scrollY;
  text.style.transform = `translateY(${scroll * 0.5}px)`;
  img.style.transform = `translateY(${scroll * -0.2}px) scale(${1 + scroll*0.0003})`;
});
