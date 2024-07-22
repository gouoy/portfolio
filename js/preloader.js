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
