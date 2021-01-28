'use strict'

window.addEventListener('load', () => {

	const left = document.querySelector('.header__slider-btn-left');
	const right = document.querySelector('.header__slider-btn-right');

	const slider = document.querySelector('.header__slider-item');
	const content = document.querySelectorAll('h1');

	let counter = 0;

	const stepSize = content[0].clientWidth;

	slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

	right.addEventListener('click', () => {
		counter >= content.length - 1 ? (counter = -1) : null;
		slider.classList.add('transformAnimation');
		counter++;
		slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
	});

	left.addEventListener('click', () => {
		if (counter <= 0) counter = content.length;
		slider.classList.add('transformAnimation');
		counter--;
		slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
	});
});

