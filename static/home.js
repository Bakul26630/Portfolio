
var btn1 = document.getElementById('first-button');
var icon1 = document.getElementById('icon1');
var collapse = document.getElementById('collapse');
var page = document.getElementById('page');
var nav = document.getElementById('nav');

btn1.addEventListener("click",()=>{
  console.log("Click");
  if(page.classList.contains('nav')){
    page.classList.remove('nav');
    nav.style.maxWidth="0vw";
  }else{
    page.classList.add('nav');
    nav.style.maxWidth="25vw";
  }

  if(icon1.classList.contains('open')){
    icon1.classList.remove('open');
  }else{
    icon1.classList.add('open');
  }

  if(collapse.classList.contains('open')){
    collapse.classList.remove('open');
  }else{
    collapse.classList.remove('open');
  }
});
