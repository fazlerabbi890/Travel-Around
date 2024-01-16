const navBars = document.querySelector('.icon');
const navItems = document.querySelector('.nav-items');

navBars.addEventListener('click', ()=>{
    navItems.classList.toggle("active");
})