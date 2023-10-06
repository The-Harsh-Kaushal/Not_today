const slides = document.querySelectorAll(".card");
let arraylen= slides.length;
var counter=0;
slides.forEach(
    (slide , index) =>{

      slide.style.left  = 100*index +"%";
    }
)
document.addEventListener("keydown",(event)=>{
    if(event.key == "ArrowLeft"){
        prev();
    }
    if(event.key == "ArrowRight")
    next();
})
function prev(){
  playsound();
    counter --;
    if(counter>=0)
    slad();
    else
    counter++;
}
function next(){
    playsound();
    counter++;
    if(counter<arraylen)
    slad();
else
counter--;
}
function slad() {
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`;
        }
    )
}

function playsound(){
    let audio = new Audio("sounds/select.mp3");
    audio.play();
}