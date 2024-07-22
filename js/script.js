/* Hamburger__________________________________________________ */
  const hamburger = document.querySelector('.menuHam'); 
  const menuList = document.querySelector('.menuList'); 

  hamburger.addEventListener('click', ()=>{
    if(hamburger.classList.contains('openMenu')){
      hamburger.classList.remove('openMenu');
      menuList.classList.remove('openMenu'); 
    }else{
      hamburger.classList.add('openMenu');
      menuList.classList.add('openMenu'); 
    }
  })

//____________________________________________________________________________________

/* Graphic Design , UIUX Design 옮기기 옮기기 옮기기..  */
const tabMenu = document.querySelector('.five .titleLine');
const tab = document.querySelectorAll('.five .tab');
const uiuxForm = document.querySelector('.form1');
const flexContainer = document.querySelector('.flexContainer');
const tabtive = document.querySelector('.tabtive'); 

const uiuxNext = uiuxForm.classList.add('.nextForm')
const uiuxContainer = flexContainer.classList.add('.nextPage')

tabMenu.addEventListener('click',(e)=>{
  tab.forEach(function(e){
    e.classList.remove('tabtive');
  });
  e.target.classList.add('tabtive');
  uiuxForm.classList.toggle('nextForm');
  flexContainer.classList.toggle('nextPage');
});

/* 모달 창 생성 ________________________ */
/* 
const item = document.querySelectorAll('.itemlist li')
const popUp = document.querySelector('.popUp');
const modal = document.querySelector('.pop') 

item.forEach(function(li){
  li.addEventListener('click',(e)=>{
    popUp.style.display = 'flex';
  });
})

let closedBtn = document.querySelector('.closed');
closedBtn.addEventListener('click',(e)=>{
  popUp.classList.add = 'popClosed';
  popUp.style.display = 'none';
  modal.removeAttribute = 'open';
  modal.getAttribute = 'close';

});
 */

/* 모달 창 생성 ________________________________________*/
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
CloseGraphic.addEventListener('click',(e)=>{
  // modalGraphic.classList.add = 'popClosed';
  modalGraphic.style.display = 'none';
});






const graphic = {
  img: [
    '/image/graphicList1.png',
    '/image/graphicList2.png',
    '/image/graphicList3.png',
    '/image/graphicList4.png',
    '/image/graphicList5.png',
    '/image/graphicList6.png',
    '/image/graphicList7.png',
    '/image/graphicList8.png',
    '/image/graphicList9.png'
  ],
  h2: [
    'Advertisement - Trash Busters',
    'Logo Design',
    'Promotion - Pethroom',
    'Advertisement - we are hiring ',
    'character illustration',
    'My diary',
    'promotion - starbucks',
    'promotion - a voucher card',
    'a shirt design - when I was young'
  ]
};

(function(){
  let prevBtn = document.querySelector('.btnSection .prevBtn');
  let nextBtn = document.querySelector('.btnSection .nextBtn');
  let list1 = document.querySelector('.form1');
  // let list2 = document.querySelector('.form2 .flexItem:nth-child(${n})');
  let list2 = document.querySelectorAll('.form2 .flexItem'); 
  let n = 0; 

  list2.forEach((value)=>{
    console.log(value);
  })

})

/*   let graphicList = document.querySelectorAll('.form2 .flexItem');
  let prevBtn = document.querySelector('.btnSection .prevBtn');
  let nextBtn = document.querySelector('.btnSection .nextBtn');


  let lastIndex = graphicList.length - 1;
  nextBtn.addEventListener('click', () => {
    let graphicIMG = document.querySelector('.popUp.design .changedImg');
    let Names = document.querySelector('.Names'); 

    let index = 0 
    // 이미지와 제목을 업데이트
    graphicIMG.src = graphic.img[index];
    Names.innerText = graphic.h2[index];

    index = index + 1 ; 
    // 인덱스 증가, 마지막 인덱스 넘으면 0으로 순환
    index = (index + 1) % graphic.img.length;
  });
 */

/*   nextBtn.addEventListener('click',()=>{
    let graphicIMG = document.querySelector('.popUp.design .changedImg')
    let Names = document.querySelector('.Names'); 
    let n= 0 
    // graphicIMG.getAttribute = 'graphic[img][${n}]';
    index = n ; 
    graphicIMG.src = graphic.img[index];
    Names.innerHTML = graphic.h2[index];

    n = n + 1 ; 
  }) */

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
const buttons = document.querySelectorAll('.headline');

//02-forEach 메서드로 각각의 버튼을 순회하면서 클릭이벤트를 등록
buttons.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    const clickedPlan = btn.parentNode;//버튼자체가아닌 부모에 active클래스를 토글
    const isActive =clickedPlan.classList.contains("liActive");
    removeActiveClasses();
    if(!isActive){//active클래스가 없을 떄...즉 닫힌항목일때 active 클래스를 추가해 활성화
      
      clickedPlan.classList.add("liActive");
    }
  })
})

//03-다른항목을 클릭했을 때 열려있는 항목을 닫을 수 있도록 active 클래스를 제거
function removeActiveClasses(){
  buttons.forEach((btn)=>{
    btn.parentNode.classList.remove("liActive");
  })
}

/* (function(){
  const planBtn = document.querySelectorAll('.details div>button');


  planBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
      const Activate = planBtn.classList.contains('active');
      removeOthersClass(); 
      if(!Activate){planBtn.classList.add("Activate")};
    })
  
    function removeOthersClass(){
      planBtn.forEach((btn)=>{
        btn.classList.remove("Activate");
      })
    } bn
  })
}) */



  // const planBtn = document.querySelectorAll('.details div>button');
  // const Imgs = document.querySelectorAll('.detailImg'); 
  // planBtn.forEach(button => {
  // button.addEventListener('click', function() {
  //     // 모든 형제 버튼에서 'active' 클래스 제거
  //     document.planBtn.forEach(btn => {
  //         btn.classList.remove('active');
  //     });
  //     // 클릭된 버튼에 'active' 클래스 추가
  //     this.classList.add('active');
  //     // 이미지 변경

  //     Imgs.forEach(img=> {
  //       const tempSrc = img.getAttribute('src');
  //       img.setAttribute('src', img.dataset.src));
  //       img.setAttribute(img.dataset.src, tempSrc);
  //     }); 
  // });


/*   const planBtn = document.querySelectorAll('.details button');
  const Imgs = document.querySelectorAll('.detailImg img'); 
  
  planBtn.forEach(button =>{
    button.addEventListener('click', ()=>{
      planBtn.forEach(btn => btn.classList.remove('active'));
    });
    button.classList.add('active'); 
    const newSrc = button.getAttribute('data-src');
    Imgs.setAttribute('src', newSrc);
  });
 */
  // planBtn.addEventListener('click', ()=>{
  //   planBtn.forEach(button =>{
  //     document.planBtn.forEach(btn =>{
  //       btn.classList.remove('active');
  //     });
  //     this.classList.add('active');
  //   });
  //   Imgs.forEach(img => {
  //     const tempSrc = document.querySelector([data-src]);
  //     img.setAttribute('src', tempSrc); 
  // });
  // })

/*   planBtn.forEach(button => {
    button.addEventListener('click', function clicked(){
        // 모든 형제 버튼에서 'active' 클래스 제거
        document.planBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        // 클릭된 버튼에 'active' 클래스 추가
        this.classList.add('active');
        
        // 이미지 변경     Imgs.forEach(img => {
          const tempSrc = document.querySelector([data-src]);
          img.setAttribute('src', tempSrc);

          // img.setAttribute(img.dataset.src, tempSrc);
        }); 
    });
    clicked();
  }); */



 