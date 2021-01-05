let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let lock = document.querySelector('body');

burger.addEventListener('click', function() {
	burger.classList.toggle('header__burger-active');
});

burger.addEventListener('click', function() {
	menu.classList.toggle('header__nav-active');
});

burger.addEventListener('click', function() {
	lock.classList.toggle('lock');
});