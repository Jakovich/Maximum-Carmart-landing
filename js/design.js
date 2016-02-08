var windowSize = '';
var windowWidth = 0;
var actualSize = 0;
var newWindowSize;
var footerLogo = $('.main_footer');

$(document).ready(function(){
	checkBrowserSize();
	setInterval ('checkBrowserSize()',1000 );

});

function checkBrowserSize() {
	windowWidth = window.outerWidth;
	if (windowWidth <= 480) {
		$("div.mobile_menu").addClass("popup_show");
	};
	
};
				 



