'use strict'

window.addEventListener('load', () => {
	const slides = document.querySelectorAll('.feedback-slider__block');
	const dots = document.querySelectorAll('.feedback-slider__list-radio');
	const slidesWrapper = document.querySelector('.feedback-slider__slide');

	let index = 0;

	const activeDot = indexDot => {
		for (let dot of dots) {
			dot.classList.remove('active_radio');
		}
		dots[indexDot].classList.add('active_radio');
	}
	const prepareCurrentSlide = ind => {
		activeDot(ind);
	}
	const stepSize2 = slides[0].clientHeight;
	slidesWrapper.style.transform = 'translateY(' + `${-stepSize2 * index}px)`;
	dots.forEach((item, indexDot) => {
		item.addEventListener('click', () => {
			index = indexDot;
			slidesWrapper.classList.add('transformAnimation');
			slidesWrapper.style.transform = 'translateY(' + `${-stepSize2 * index}px)`;
			prepareCurrentSlide(index);
		});
	});

});