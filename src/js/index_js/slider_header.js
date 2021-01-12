'use strict'

window.addEventListener('load', () => {
	//buttons
	const left = document.querySelector('.header__slider-btn-left');
	const right = document.querySelector('.header__slider-btn-right');
	//carusel
	const slider = document.querySelector('.header__slider-item');
	const content = document.querySelectorAll('h1');
	//counter
	let counter = 0;
	//step
	const stepSize = content[0].clientWidth;
	//position
	slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
	//btn right
	right.addEventListener('click', () => {
		counter >= content.length - 1 ? (counter = -1) : null;
		slider.classList.add('transformAnimation');
		counter++;
		slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
	});
	//btn left
	left.addEventListener('click', () => {
		if (counter <= 0) counter = content.length;
		slider.classList.add('transformAnimation');
		counter--;
		slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
	});
});

