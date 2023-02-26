const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar')
const header__shop = document.querySelector('.header__shop');
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    header__shop.classList.toggle('active')
})