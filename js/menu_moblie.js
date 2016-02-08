$(document).ready(function() {
	var mobileMenuLink = $("div.mobile_menu");
	var mobileMenu = $(".mobile_menu_popup");
	var mobileMenuClose = $(".menu_close");
	var mobileSubscribeLink = $(".mobile_subscribe_link");
	var mobileEmailLink = $(".mobile_email_link");
	
	mobileMenuLink.click ( function() {
		mobileMenu.css('display','block').animate({'top': '0'}, 600);	
	});
	
	
	mobileMenuClose.click( function() {
	mobileMenu.animate({top: '-500'}, 400,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
	mobileSubscribeLink.click( function() {
	mobileMenu.animate({top: '-500'}, 100,
					   function(){
								$(this).css('display','none');
							}
						  );
					   
	});
	
	mobileEmailLink.click( function() {
	mobileMenu.animate({top: '-500'}, 100,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
										 
});
	
					
				  
				  
