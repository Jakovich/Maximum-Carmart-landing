$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).width() <= 490) {
			if ($(this).scrollTop() > 100) {
				$("nav.mobile_nav").animate({'top':'0px'},400);
			}
			else {
				$("nav.mobile_nav").stop(true).animate({'top':'-105px'},300);
			}
		}
		else {
			if ($(this).scrollTop() > 200) {
				$("nav.main_nav").animate({'top':'0px'},400);
			}
			else {
				$("nav.main_nav").stop(true).animate({'top':'-105px'},400);
			}
		}
	});
});
		
		
		
		
		
		
		
		

