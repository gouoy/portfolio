

/* 스크롤포지션 */
const scroller = document.querySelector(".scrollbar");
/* scroller.addEventListener("scroll", event => {
  // console.log(scroller.scrollTop); 
}); */

scroller.addEventListener("scroll", event =>{
  let square = document.querySelector('.square');
  let logo = document.querySelector('.logo'); 
  let btnScroll = document.querySelector('.btnNav');

  if(scroller.scrollTop <= 750){
    square.style.display = "flex";
    logo.style.display = "flex";
    btnScroll.classList.remove('volgende'); 

    
  }else if(scroller.scrollTop >= 827){
    square.style.display = "none"; 
    logo.style.display = "none";
    btnScroll.classList.add('volgende'); 
    };
})

/*const output = document.querySelector(".output");

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`; 
});  */

/* let square = document.querySelector('.square');
if(scroller.scrollTop > 820){
  square.style.display = "none"; 
  return;
}else if(scroller.scrollTop == 0){
  square.style.display = "flex"; 
}; */

/* pagination */
const pageCircle = document.querySelectorAll('.btnNav a');
const btnActive = document.querySelector('#btnActive'); 
