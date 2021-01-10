'use strict'

window.addEventListener('load', () => {
	const menuItem = document.querySelector('.scale-item');
	const menuItem2 = document.querySelector('.big');

	menuItem.addEventListener('click', () => {
		menuItem.classList.toggle('scale-item');
		menuItem2.classList.toggle('scale-item');
		menuItem2.classList.toggle('big');
		menuItem.classList.toggle('big');
	});

	menuItem2.addEventListener('click', () => {
		menuItem2.classList.toggle('scale-item');
		menuItem.classList.toggle('scale-item');
		menuItem.classList.toggle('big');
		menuItem2.classList.toggle('big');
	});
});