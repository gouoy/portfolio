/* 초기 로딩 작업 _____________________________________________ */
document.onreadystatechange = function() {

  if (document.readyState !== "complete") {
      document.getElementById('wrap').style.visibility = "hidden";
      document.querySelector(
        "#preloader").style.visibility = "visible";
  } else {
      document.querySelector(
        "#preloader").style.display = "none";
      document.querySelector(
        "#wrap").style.visibility = "visible";
  }
};

function counter(){
  const count = setInterval(function(){
    const c = document.getElementById("counter");
    int = parseInt(c.textContent); 
    c.textContent = (++int).toString();
    if(int == 100){
      clearInterval(count);
      // c.classList.add("hide");
    }
  },60)
}
counter();

/* mouse-cursor event_________________________________*/
const isTouchDevice = 'ontouchstart' in window;

const createCursorFollower = () => {
  const $el = document.querySelector('.cursorFollower');
  
  // Each time the mouse coordinates are updated, we need to pass the values to gsap in order to animate the element
  window.addEventListener('mousemove', (e) => {
    const { target, x, y } = e;

    const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button') || target?.closest('li') || target?.closest('p img');/* || target?.closest(profileBars) */

    gsap.to($el, {
      x: x+0,
      y: y-0,
      duration: 0.7,
      ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
      opacity: isTargetLinkOrBtn ? 0.6 : 1,
      transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
    });
  });

  document.addEventListener('mouseleave', (e) => {
    gsap.to($el, {
      duration: 0.8,
      opacity: 0,
    });
  });
}

// Only create the cursor follower if device isn't touchable
if (!isTouchDevice) {
  createCursorFollower();
}



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


/* ____________________________________t_______________________________________________________ */
/* 햄버거 메뉴 열고 닫기  */


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

  // 한국어 버전,영어버전 바꾸기!
  const korean = document.querySelector('.kor');
  const english = document.querySelector('.eng');

  /* 프로필 바 */
  /* const profileBar = document.querySelectorall('.secondRow p img')

  profileBar.forEach(item => {
    const profileSrc = profileBar.src; 
    const profileChange = profileBar.getAttribute('data-img');

    item.addEventListener('mouseenter',() =>{
      profileBar.src = profileChange;
    });
    item.addEventListener('mouseleave',() =>{
      profileBar.src = profileBar; 
    });
  }); */
  const profileBars = document.querySelectorAll('.secondRow p img');

profileBars.forEach(item => {
  const originalSrc = item.src; // 각 이미지의 기존 src 속성 값
  const profileChange = item.getAttribute('data-img'); // 각 이미지의 data-img 속성 값

  // mouseenter 이벤트 리스너 추가
  item.addEventListener('mouseenter', () => {
    item.src = profileChange;  // 마우스가 요소에 들어왔을 때 이미지 변경
  });

  // mouseleave 이벤트 리스너 추가
  item.addEventListener('mouseleave', () => {
    item.src = originalSrc; // 마우스가 요소에서 벗어났을 때 원래 이미지로 복원
  });
});

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


  const planBtn = document.querySelectorAll('.details button');
  const Imgs = document.querySelectorAll('.detailImg img'); 
  
  planBtn.forEach(button =>{
    button.addEventListener('click', ()=>{
      planBtn.forEach(btn => btn.classList.remove('active'));
    });
    button.classList.add('active'); 
    const newSrc = button.getAttribute('data-src');
    Imgs.setAttribute('src', newSrc);
  });

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
        
        // 이미지 변경
        Imgs.forEach(img => {
          const tempSrc = document.querySelector([data-src]);
          img.setAttribute('src', tempSrc);

          // img.setAttribute(img.dataset.src, tempSrc);
        }); 
    });
    clicked();
  }); */


/* 스크롤링 */
// let sections = gsap.utils.toArray(".detailImg img");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length -1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".detailImg",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length -1),
//     end: "+=7000" //속도가 달라짐
//   }
// });
/* planning slide__________________ */
// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",

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

    let currentIndex = 0; 
document.querySelector('.popUp.design .btnSection .nextBtn').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % graphic.img.length;

  const graphicImg = document.querySelector(',popUp.design .pop .inform img');
  const graphicText = document.querySelector('popUp.design h2');

  graphicImg.src = graphic.img[currentIndex];
  graphicText.textContent = graphic.h2[currentIndex]; 
});
