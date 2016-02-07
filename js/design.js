

var windowSize = '';
var windowWidth = 0;
var actualSize = 0;
var newWindowSize;


$(document).ready(function(){
	checkBrowserSize();
});

function checkBrowserSize() {
	windowWidth = window.outerWidth;
	var contentWidth = $('body').width();
	var sizeDiff = windowWidth - contentWidth;
	actualSize = windowWidth - sizeDiff;
	
	if (actualSize < 480) 
	{newWindowSize = 'mobile'; 
	 console.log(newWindowSize);
	 }
	
	
}
				 



