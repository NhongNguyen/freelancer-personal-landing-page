const toggle = document.querySelector('.header-menu');
const menu = document.querySelector('.header-toggle-menu');
const body = document.body;

toggle.addEventListener('click', showMenu);

function showMenu(e){
  menu.classList.toggle('active');
}

body.addEventListener('click', bodyShow);

function bodyShow(e){
  e.target
}

