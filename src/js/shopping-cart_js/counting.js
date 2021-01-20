
window.addEventListener('load', () => {
    let price = document.getElementById('price');
    let minusButton = document.getElementById('minus-button');
    let plusButton = document.getElementById('plus-button');
    let count = document.getElementById('count');
    let total = document.getElementById('total');
    let result = parseInt(count.innerHTML) * parseInt(price.innerHTML)
    let currentCount;

    total.textContent = result.toString()

    // let selectedTd;

    // tbody.onclick = function(event) {
    //     let target = event.target;
    //     if (target.tagname != )
    // }



    minusButton.addEventListener('click',() => {
        currentCount = parseInt(count.innerHTML);
        --currentCount;
        count.textContent = currentCount.toString()
        if (currentCount <0) row.remove()
    })

    plusButton.addEventListener('click',() => {
        currentCount = parseInt(count.innerHTML);
        ++currentCount;
        count.textContent = currentCount.toString()
    })
    
})