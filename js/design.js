
/*______________Graphic <-> UIUX Switch_________________________  */
let tabMenu = document.querySelector('.five .titleLine');
let tab = document.querySelectorAll('.five .tab');
let uiuxForm = document.querySelector('.form1');
let flexContainer = document.querySelector('.flexContainer');
let tabtive = document.querySelector('.tabtive'); 

let uiuxNext = uiuxForm.classList.add('.nextForm')
let uiuxContainer = flexContainer.classList.add('.nextPage')

tabMenu.addEventListener('click',(e)=>{
  e.target.classList.toggle('tabtive');

  tab.forEach(function(e){
    e.classList.remove('tabtive');
  });
  uiuxForm.classList.toggle('nextForm');
  flexContainer.classList.toggle('nextPage');
});

/* 모달 창 생성 ________________________ */
let item = document.querySelectorAll('.itemlist li')
let popUp = document.querySelector('.popUp');
let modal = document.querySelector('.pop') 

item.forEach(function(li){
  li.addEventListener('click',(e)=>{
    popUp.style.display = 'flex';
  });
})

let closedBtn = document.querySelector('.closed');
closedBtn.addEventListener('click',(e)=>{
  popUp.classList.add = 'popClosed';
  popUp.style.display = 'none';
});

let modalGraphic = document.querySelector('.popUp.design');
let CloseGraphic = document.querySelector('.popUp.design .closed');
closedBtn.addEventListener('click',(e)=>{
  // modalGraphic.classList.add = 'popClosed';
  modalGraphic.style.display = 'none';
});

let form2 = document.querySelector('.form2'); 



/* 그래픽디자인 팝업창 ... *//* 
(function(){
  const graphicChapter = document.querySelector('.form2');
  const graphicList = document.querySelectorAll(".form2 .flexItem"); 
  const graphicPop = document.querySelector('.popBody.design');
  const toNext = document.querySelector('.prevBtn');
  const toPrev = document.querySelector('.nextBtn');

  graphicList.forEach(){
    graphicList.addEventListener('click',()=>{
      graphicPop.classList.add('active');
    })
  }

  let index = 0;
  let lastIndex = graphicList.length - 1;
  const graphicImages = [
    '/image/graphicList1.png',
    '/image/graphicList2.png',
    '/image/graphicList3.png',
    '/image/graphicList4.png',
    '/image/graphicList5.png',
    '/image/graphicList6.png',
    '/image/graphicList7.png',
    '/image/graphicList8.png',
    '/image/graphicList9.png'
];
}); 
 */


/* PLANNING_______________________________ */
//01-클릭할 부분 모두 불러옴
