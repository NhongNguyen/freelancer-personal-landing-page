const toggle = document.querySelector('.header-menu');
const menu = document.querySelector('.header-toggle-menu');
const cancel = document.querySelector('.header-toggle-cancel');
const body = document.body;

toggle.addEventListener('click', showMenu);

function showMenu(e){
  menu.classList.toggle('active');
}



