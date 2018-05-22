
	$(document).ready( function(){
		$('.icon-anim').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
		console.log("animation end");
		$(".icon-anim").css({"animation-dealy":"0s" , "-webkit-animation-delay" :"0s"});
	});
	})
	
	function animateIt() {
		console.log("click");
		$(".icon-anim").removeClass("fadeInUp").addClass("fadeOutRight");
		setTimeout(() => {
			$(".icon-anim").removeClass("fadeOutRight").addClass("fadeInLeft");
			console.log("time")
		}, 1500);

		//$('.get_started').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
			$('html,body').animate({
					scrollTop: $(".skills").offset().top
				},
				1000);
		//});

	}