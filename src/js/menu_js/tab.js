(function() {
	let tabsElement = document.querySelector('.tab');
	let previousTab;
	
	tabsElement.addEventListener('click', menuTab, {capture: true});
	
	function initFirstTab() {
		previousTab = document.getElementById('All');
		previousTab.classList.add('active');
	}
	
	function menuTab(event) {
		let button = event.target.closest('button');
		if (!button) {
			return;
		}
		previousTab.classList.toggle('active');
		let attrValue = button.getAttribute('data-id');
		let currentTabContent =  document.getElementById(attrValue);
		currentTabContent.classList.add('active');
		previousTab = currentTabContent;
	}
	
	initFirstTab();
})();