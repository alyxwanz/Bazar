'use strict'

window.addEventListener('load', () => {
	const slides2 = document.querySelectorAll('.gallery__slider');
	const dots = document.querySelectorAll('.gallery__list-radio');
	const slidesWrapper2 = document.querySelector('.gallery__wrapper-slide');

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
	const stepSize2 = slides2[0].clientWidth;
	slidesWrapper2.style.transform = 'translateX(' + `${-stepSize2 * index}px)`;
	dots.forEach((item, indexDot) => {
		item.addEventListener('click', () => {
			index = indexDot;
			slidesWrapper2.classList.add('transformAnimation');
			slidesWrapper2.style.transform = 'translateX(' + `${-stepSize2 * index}px)`;
			prepareCurrentSlide(index);
		});
	});

});