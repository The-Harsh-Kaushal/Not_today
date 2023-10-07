
const  news=document.querySelector(".news").children;
const game_modes=document.querySelector(".game_modes").children;

let index=0 , index2=0;
animate(), animate2();




function animate(){
    if(index)
    news[index-1].classList.remove("text_an");
    if(index>=news.length)
    index=0;
    news[index].classList.add("text_an");
    index++;
    setTimeout(animate,3000);
}
function animate2(){
    if(index2)
    game_modes[index2-1].classList.remove("text_an2");
    if(index2>=game_modes.length)
    index2=0;
    game_modes[index2].classList.add("text_an2");
    index2++;
    setTimeout(animate2,3000);
}