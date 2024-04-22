const toggle = document.querySelector('.header-menu');
const menu = document.querySelector('.header-toggle-menu');

toggle.addEventListener('click', showMenu);

function showMenu(){
  menu.classList.toggle('active');
}