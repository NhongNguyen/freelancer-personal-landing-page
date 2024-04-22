//navbar
const toggle = document.querySelector('.header-menu');
const menu = document.querySelector('.header-toggle-menu');
const cancel = document.querySelector('.header-toggle-icon');
const body = document.body;

toggle.addEventListener('click', showMenu);

cancel.addEventListener('click', hideMenu);


function showMenu(e){
  menu.classList.toggle('active');
}

function hideMenu(e){
  menu.classList.toggle('active');
}
// previous/next
const previous = document.querySelector('.client-button-previous');
const next = document.querySelector('.client-button-next');
const clientItem = document.querySelectorAll('.client-item');

previous.addEventListener('click', previousClient);

next.addEventListener('click', nextClient);

let index =0;
function previousClient(){
  index = index - 1;
  console.log("🚀 ~ previousClient ~ index:", index)
}

function nextClient(){
  index = index + 1;
  console.log("🚀 ~ nextClient ~ index:", index)
}
//

const questionItem = document.querySelectorAll('.question-item');
const iconItem = document.querySelectorAll('.question-icon');

[...questionItem].forEach((item)=>item.addEventListener('click', toggleQuestion));

function toggleQuestion(e){
  e.currentTarget.classList.toggle('active');
  [...iconItem].forEach((item)=>item.classList.toggle('fa-plus'));
  [...iconItem].forEach((item)=>item.classList.toggle('fa-minus'));
  console.log("🚀 ~ toggleQuestion ~ e.target:", e.target)
}
//toggle footer item

const footerItem = document.querySelectorAll('.footer-item');
[...footerItem].forEach((item) => item.addEventListener('click', toggleFooterItem));
function toggleFooterItem(e){
  e.currentTarget.classList.toggle('active');
  console.log("🚀 ~ toggleFooterItem ~ e.currentTarget:", e.target.nextElementSibling)
}
  
