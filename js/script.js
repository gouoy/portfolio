/* 초기 로딩 작업 _____________________________________________ */
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.getElementById('wrap').style.visibility = "hidden";
      document.querySelector(
        "#loading").style.visibility = "visible";
  } else {
      document.querySelector(
        "#loading").style.display = "none";
      document.querySelector(
        "#wrap").style.visibility = "visible";
  }
};
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

/* 모달 창 생성 ________________________ */
const item = document.querySelectorAll('.itemlist li')
const popUp = document.querySelector('.popBody');
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
