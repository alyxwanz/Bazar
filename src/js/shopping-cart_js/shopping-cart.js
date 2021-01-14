const tBody = document.getElementById('tbody');
const price = document.getElementById('price');
const count = document.getElementById('count');

price.innerHTML

function getTotalPrice() {
    return price * count;
};

//не забыть привести к числу

// сделать Qty инпутом
// сделать валидацию инпута на ввод исключительно чисел => 0
// функция, принимающая price, qty, возвращающая subtotal
// должно работать по нажатию enter

////span, display-block, absolute, addeventlistener на блок, который удаляет его полностью (row)