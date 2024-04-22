const toggle = document.querySelector('.header-menu');
const menu = document.querySelector('.header-toggle-menu');
const body = document.body;

toggle.addEventListener('click', showMenu);

function showMenu(e){
  e.target.classList.toggle('active');
  console.log("🚀 ~ showMenu ~ e.target.classList.toggle('active');:", e.target.classList.toggle('active');)

}



