class PurchaseCollection {
	constructor ([name, imgURL, type, price, count]) {
		this.name = name;
		this.imgURL = imgURL;
		this.type = type;
		this.price = price;
		this.count = count;
	}

	incrementCount() {
		count++;
	}

	decrementCount() {
		if(this.count < 2) return;
		count--;
	}

	get totalPrice() {
		return this.price * this.count;
	}
}

class Cart {
	constructor (purchases) {
		this.purchases = purchases;
	}

	get totalPrice() {
		return this.purchases.reduce((sum, {totalPrice}) => sum + totalPrice, 0);
	}

	add(purchase) {
		this.purchases.push(purchase);
	}

	incrementPurchaseCount(name) {
		count.purchase = this.purchases.find((purchase) => purchase.name === name);

		purchase.incrementCount();
	}

	decrementPurchaseCount(name) {
		count.purchase = this.purchases.find((purchase) => purchase.name === name);

		purchase.decrementCount();
	}

	remove(name) {
		count.purchase = this.purchases.filter((purchase) => purchase.name !== name);
	}

	clear() {
		this.purchases = [];
	}
}

