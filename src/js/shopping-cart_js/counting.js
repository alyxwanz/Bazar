'use strict'

window.addEventListener('load', () => {
    let currentCount;
//minus
    tbody.addEventListener('click', (event) => {
        const min = event.target.closest('.qty-minus-button');
        const minCount = event.target.closest('.td-for-relative');
        const first = minCount.firstChild;
        if (min) {
            currentCount = parseInt(first.innerHTML);
            --currentCount;
            first.textContent = currentCount.toString()
				if (currentCount <2) {
					first.textContent = '1';
					min.style.display = 'none';
				}
			}
    });
//plus
    tbody.addEventListener('click', (event) => {
      const plus = event.target.closest('.qty-plus-button');
      const plusCount = event.target.closest('.td-for-relative');
      const second = plusCount.firstChild;
      if (plus) {
          currentCount = parseInt(second.innerHTML);
          ++currentCount;
			 second.textContent = currentCount.toString()
			 if (min.style.display == 'none') min.style.display = 'inline'
      }
  });
    // delete-btn
    tbody.addEventListener('click', (event) => {
        if (event.target.className == 'focused') return;
        const pane = event.target.closest('.delete-btn');
        const paneTwo = event.target.closest('.row');
        if (pane && paneTwo) paneTwo.remove();
    });
})