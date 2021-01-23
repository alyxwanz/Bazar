'use strict'

window.addEventListener('load', () => {
	setTimeout( () => {
const preloader = document.getElementById('page-preloader');
if (!preloader.classList.contains('done')) {
	preloader.classList.add('done');
}
	}, 500);
});