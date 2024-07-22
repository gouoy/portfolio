
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