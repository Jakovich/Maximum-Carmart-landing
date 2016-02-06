(function() {
	var subscribeLink = document.querySelectorAll(".subscribe_popup_link");
	var subscribePopup = document.querySelector(".subscribe_popup");
	var subscribeClose = subscribePopup.querySelector(".popup_close");
	var subscribeSuccesPopup = document.querySelector(".subscribe_popup_succes");
	var subscribeSuccesLink = subscribePopup.querySelector(".submit_succes");
	var subscribeSuccesClose = subscribeSuccesPopup.querySelector(".popup_close");
	
	for (var i = 0; i < subscribeLink.length; i++){
		subscribeLink[i].addEventListener("click", function(event){
			event.preventDefault();
			subscribePopup.classList.add("popup_show");
		});
		subscribeClose.addEventListener("click", function(){
			subscribePopup.classList.remove("popup_show");
		});
		subscribeSuccesLink.addEventListener("click", function(){
			subscribeSuccesPopup.classList.add("popup_show");
			subscribePopup.classList.remove("popup_show");
		});
		subscribeSuccesClose.addEventListener("click", function(){
			subscribeSuccesPopup.classList.remove("popup_show");
		});
		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (subscribePopup.classList.contains("popup_show")){
					subscribePopup.classList.remove("popup_show");
				}
				if (subscribeSuccesPopup.classList.contains("popup_show")){
					subscribeSuccesPopup.classList.remove("popup_show");
				}
			}
		});
	};
}());