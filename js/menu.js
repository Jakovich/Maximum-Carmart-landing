var menuElem = document.querySelector(".main_nav");
window.onscroll = function() {
	if (window.pageYOffset > 250) {
		menuElem.classList.add("popup_show");
	};
	if (window.pageYOffset < 250) {
		if (menuElem.classList.contains("popup_show"))
		menuElem.classList.remove("popup_show");
	};
};