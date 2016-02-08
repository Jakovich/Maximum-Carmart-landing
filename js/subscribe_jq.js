$(document).ready(function() {
	var subscribeLink = $(".subscribe_popup_link");
	var subscribePopup = $(".subscribe_popup");
	var subscribeClose = $(".popup_close");
	var subscribeSuccesPopup = $(".subscribe_popup_succes");
	var subscribeSuccesLink = $(".submit_succes");
	var subscribeSuccesClose = $(".popup_close");

	subscribeLink.click ( function(event) {
		 event.preventDefault();
		subscribePopup.css('display','block').animate({'right': '0'}, 700);	
	});
	
	
	subscribeClose.click( function() {
	subscribePopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
	$(".subscribe_form").submit(function(){
		subscribePopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
		subscribeSuccesPopup.css('display','block').animate({'right': '0'}, 700);
	});
	
	subscribeSuccesClose.click( function() {
	subscribeSuccesPopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
	

});