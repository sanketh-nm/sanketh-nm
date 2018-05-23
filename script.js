
	$(document).ready( function(){
		$('.icon-anim').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
		console.log("animation end");
		$(".icon-anim").css({"animation-dealy":"0s" , "-webkit-animation-delay" :"0s"});
    });
    
    let $form = $('form');
       $form.submit(function(){

      alert($(this).attr('action')+'?'+"email="+$('#email').val()+"&subject="+$('#subject').val()+"&message="+$('#message').val());
    //   $.get($(this).attr('action')+'?'+"email="+$('#email').val()+"&subject="+$('#subject').val()+"&message="+$('#message').val(), function(response,err){
    //       console.log("okay"+response+err);
    //        alert("success");
    //   },'json');
      
      $('<i class="medium material-icons wow rotateIn" data-wow-delay="1s" style="color:green" >check_circle</i>').replaceAll('.submit');
      M.toast({ html: "Email sent" , classes: 'rounded'});
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
    
    