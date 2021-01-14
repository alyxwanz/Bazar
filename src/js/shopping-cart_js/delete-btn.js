const deleteBtn = document.querySelector('.delete-btn');
const focused = document.querySelector('.focused');
const row = document.querySelector('.row');



deleteBtn.addEventListener('click', () => {
    row.classList.add('focused');
})


//