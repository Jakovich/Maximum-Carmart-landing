$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			  if ($(window).width() <= 490) {
				$("nav.mobile_nav").animate({'top':'0px'},400);
			  };
		}
				else{
					$("nav.mobile_nav").stop(true).animate({'top':'-105px'},300);
		};

	});
});
