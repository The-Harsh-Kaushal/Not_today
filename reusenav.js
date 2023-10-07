const close=document.getElementById("close-btn");
const menu=document.getElementById("menu-btn");
const navbar=document.getElementById("navbar");
const header=document.querySelector(".head");
menu.addEventListener("click",()=>{
    navbar.style.right="0";
})
close.addEventListener("click",()=>{
    navbar.style.right="-100vw";
})
console.log(header)
window.addEventListener("scroll",()=>{
    header.classList.toggle("scrol",window.scrollY >0);
})
