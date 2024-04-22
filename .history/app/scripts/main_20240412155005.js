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

[...clientItem].forEach((item)=>item.addEventListener('click', previous)
previous.addEventListener('click', previousClient);

next.addEventListener('click', nextClient);

let index =0;
function previousClient(){
  
  console.log("🚀 ~ previousClient ~ index:", index)
}

function nextClient(){
  index = index + 1;
  console.log("🚀 ~ nextClient ~ index:", index)
}