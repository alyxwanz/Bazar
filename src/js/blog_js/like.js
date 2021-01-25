'use strict'

window.addEventListener('load', () => {

	const likeBtn = document.querySelector('.blog__content-item-panel-rate-like');
	const likeCount = document.querySelector('.blog__content-item-panel-rate-summ');
	const activeLikeBtn = document.querySelector('.active-like');
	let counter;

	likeBtn.addEventListener('click', () => {
		likeBtn.classList.toggle('active-like');
		counter = parseInt(likeCount.innerHTML);
		if (counter != 66) {
			++counter;
		} else {
			--counter;
		}
		likeCount.textContent = counter.toString();
	});
});