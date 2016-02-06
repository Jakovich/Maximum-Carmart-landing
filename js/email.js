(function() {
	var emailLink = document.querySelectorAll(".email_popup_link");
	var emailPopup = document.querySelector(".email_popup");
	var emailClose = emailPopup.querySelector(".popup_close");
	var emailSuccesPopup = document.querySelector(".email_popup_succes");
	var emailSuccesLink = emailPopup.querySelector(".email_succes");
	var emailSuccesClose = emailSuccesPopup.querySelector(".popup_close");
	
	for (var i = 0; i < emailLink.length; i++){
		emailLink[i].addEventListener("click", function(event){
			event.preventDefault();
			emailPopup.classList.add("popup_show");
		});
		emailClose.addEventListener("click", function(){
			emailPopup.classList.remove("popup_show");
		});
		emailSuccesLink.addEventListener("click", function(){
			emailSuccesPopup.classList.add("popup_show");
			emailPopup.classList.remove("popup_show");
		});
		emailSuccesClose.addEventListener("click", function(){
			emailSuccesPopup.classList.remove("popup_show");
		});
		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (emailPopup.classList.contains("popup_show")){
					emailPopup.classList.remove("popup_show");
				}
				if (emailSuccesPopup.classList.contains("popup_show")){
					emailSuccesPopup.classList.remove("popup_show");
				}
			}
		});
	};
}());