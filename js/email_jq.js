$(document).ready(function() {
	var emailLink = $(".email_popup_link");
	var emailPopup = $(".email_popup");
	var emailClose = $(".popup_close");
	var emailSuccesPopup = $(".email_popup_succes");
	var emailSuccesLink = $(".email_succes");
	var emailSuccesClose = $(".popup_close");
	
	emailLink.click ( function(event) {
		 event.preventDefault();
		emailPopup.css('display','block').animate({'right': '0'}, 700);	
	});
	
	
	emailClose.click( function() {
	emailPopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
});
