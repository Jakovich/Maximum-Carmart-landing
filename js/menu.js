var menuElem = document.querySelector(".main_nav");
window.onscroll = function() {
	if (window.pageYOffset > 250) {
		menuElem.classList.add("menu_show");
	};
	if (window.pageYOffset < 250) {
		if (menuElem.classList.contains("menu_show"))
		menuElem.classList.remove("menu_show");
	};
};