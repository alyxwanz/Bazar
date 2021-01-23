'use strict'

window.addEventListener('load', () => {
	let currentCount;
	let totalPrice;
	const subtotalSummary = document.querySelectorAll('.total-value');
	let subtotalArr = []

	

	

	const summarySubtotal = document.querySelector('.summary-price')
	const taxSubtotal = parseInt(document.querySelector('.tax-price').innerHTML)
	const orderTotalSubtotal = document.querySelector('.order-total-price')

	for (let item of subtotalSummary) {
		 subtotalArr.push(parseInt(item.innerHTML))
	}

	let itemSummary = subtotalArr.reduce((sum, elem) => sum = sum + elem, 0)

	summarySubtotal.textContent = itemSummary.toString();
	orderTotalSubtotal.textContent = (taxSubtotal + parseInt(summarySubtotal.textContent)).toString();
	function countSummary() {
		 for (let item of subtotalSummary) {
			  subtotalArr.push(parseInt(item.innerHTML))
		 }

		 let itemSummary = subtotalArr.reduce((sum, elem) => sum = sum + elem, 0)

		 summarySubtotal.textContent = itemSummary.toString();
		 orderTotalSubtotal.textContent = (taxSubtotal + parseInt(summarySubtotal.textContent)).toString();
	}
//minus
	tbody.addEventListener('click', (event) => {
		 const min = event.target.closest('.qty-minus-button');
		 const minCount = event.target.closest('.td-for-relative');
		 const first = minCount.firstChild;

		 const price = event.target.closest('.row');
		 const priceCount = price.childNodes[1].lastChild
		 const quantity = event.target.closest('.td-for-relative');
		 const quantityCount = quantity.firstChild;
		 const totalValue = event.target.closest('.row');
		 const totalValueCount = totalValue.lastChild.lastChild
		 function getTotalPrice() {
	
			  totalPrice = parseInt(priceCount.innerHTML) * parseInt(quantityCount.innerHTML);
			  totalValueCount.textContent = totalPrice.toString()
			  return totalValue
		 };

		 if (min) {        
			  currentCount = parseInt(first.innerHTML);
			  --currentCount;
			  first.textContent = currentCount.toString()
			  if (currentCount <2) first.textContent = '1'
			  
		 }
		 getTotalPrice()
		 countSummary()
		 });
//plus
	tbody.addEventListener('click', (event) => {
		 const plus = event.target.closest('.qty-plus-button');
		 const plusCount = event.target.closest('.td-for-relative');
		 const second = plusCount.firstChild;

		 const pricePlus = event.target.closest('.row');
		 const priceCountPlus = pricePlus.childNodes[1].lastChild
		 const quantityPlus = event.target.closest('.td-for-relative');
		 const quantityCountPlus = quantityPlus.firstChild;
		 const totalValuePlus = event.target.closest('.row');
		 const totalValueCountPlus = totalValuePlus.lastChild.lastChild;

	

	  function getTotalPrice() {
	
			  totalPrice = parseInt(priceCountPlus.innerHTML) * parseInt(quantityCountPlus.innerHTML);
			  totalValueCountPlus.textContent = totalPrice.toString()
			  return totalValuePlus
	  }
		 if (plus) {
			  currentCount = parseInt(second.innerHTML);
			  ++currentCount;
			  second.textContent = currentCount.toString()
			  if (currentCount <1) second.textContent = '1'

		 }
	  getTotalPrice()
	  countSummary()



 });
	// delete-btn
	tbody.addEventListener('click', (event) => {
		 if (event.target.className == 'focused') return;
		 const pane = event.target.closest('.delete-btn');
		 const paneTwo = event.target.closest('.row');
		 if (pane && paneTwo) paneTwo.remove();
	});






})