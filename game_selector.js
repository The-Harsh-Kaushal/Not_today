const slides = document.querySelectorAll(".card");
let arraylen= slides.length;
var counter=0;
slides.forEach(
    (slide , index) =>{

      slide.style.left  = 100*index +"%";
    }
)
function prev(){

    counter --;
    if(counter>=0)
    slad();
    else
    counter++;
}
function next(){
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