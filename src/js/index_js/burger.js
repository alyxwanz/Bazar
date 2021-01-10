'use strict'

window.addEventListener('load', () => {
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__nav');
	const lock = document.querySelector('body');
	const orange = document.querySelector('.header');
//burger-icon
	burger.addEventListener('click', function () {
		burger.classList.toggle('header__burger-active');
	});
//menu
	burger.addEventListener('click', function () {
		menu.classList.toggle('header__nav-active');
	});
//lock
	burger.addEventListener('click', function () {
		lock.classList.toggle('lock');
	});
//lock-bg
	burger.addEventListener('click', function () {
		orange.classList.toggle('lock');
	});
});