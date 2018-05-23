$(document).ready(function () {
	$('.icon-anim').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
		console.log("animation end");
		$(".icon-anim").css({
			"animation-dealy": "0s",
			"-webkit-animation-delay": "0s"
		});
	});

	let $form = $('form');
	$form.submit(function () {

		//alert($(this).attr('action') + '?' + "email=" + $('#email').val() + "&subject=" + $('#subject').val() + "&message=" + $('#message').val());

		$.ajax({
			url: $(this).attr('action') + '?' + "email=" + $('#email').val() + "&subject=" + $('#subject').val() + "&message=" + $('#message').val(),
			dataType: 'text',
			cache: false,

			beforeSend: function () {
				$('.submit').addClass('animated flip infinite')
				console.log("Loading");
			},

			error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			},

			success: function (data) {
				console.log('Success');
				console.log(data);
				$('<i class="medium material-icons"  style="color:green" >check_circle</i>').replaceAll('.submit');
				M.toast({
					html: "Email sent",
					classes: 'rounded'
				});
			},

			complete: function () {
				console.log('Finished all tasks');
			}
		});
		return false;
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