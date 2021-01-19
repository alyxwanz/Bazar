'use strict'

window.addEventListener('load', () => {

    const deleteBtn = document.querySelector('.delete-btn');
    const focused = document.querySelector('.focused');
    const row = document.querySelectorAll('.row');



    deleteBtn.addEventListener('click', function () {
        row.classList.toggle('focused');
    });
});