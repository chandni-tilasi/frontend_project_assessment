const menuBtn = document.querySelector('.menu-Btn')
const closeBtn = document.querySelector('.nav-close')
 menuBtn.addEventListener('click',function(){
     document.querySelector('.nav').style.transform = "translateX(0)"
 })
 closeBtn.addEventListener('click', function(){
    document.querySelector('.nav').style.transform = "translateX(-1000px)"
})

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,5000);
  
}

changeSlide();
