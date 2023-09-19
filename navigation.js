const close=document.getElementById("close-btn");
const menu=document.getElementById("menu-btn");
const navbar=document.getElementById("navbar");
menu.addEventListener("click",()=>{
    navbar.style.right="0";
})
close.addEventListener("click",()=>{
    navbar.style.right="-100vw";
})
function playsound(){
    let audio = new Audio("sounds/select.mp3");
    audio.play();
}