'use strict'

window.addEventListener('load', () => {
    const deleteBtn = document.querySelector('.delete-btn');

    tbody.onclick = function(event) {
        if (event.target.className == 'focused') return;
        let pane = event.target.closest('.delete-btn');
        let paneTwo = event.target.closest('.row');
        if (pane && paneTwo) paneTwo.remove();
    };
})