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
const previous = document.querySelector



