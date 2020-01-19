$(document).ready(function(){

	$("#menue #search-menu").click(function(e){

		e.preventDefault();
		$(".dropdown-menu2").toggle();
	});
	$("#menue #search-icon").click(function(e){
		$(".dropdown-menu2").toggle();
	})
	$('.dropdown-submenu a.test').on("click", function(e){
	    $(this).next('ul').toggle();
	    e.stopPropagation();
	    e.preventDefault();
	  });
	$(window).scroll(function(){
	  var sticky = $('.sticky'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 200) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
	// SLIDER//////////////////////////////
	$('#basicSlider').multislider({
			continuous: true,
			duration: 2000
		});
		$('#mixedSlider').multislider({
			duration: 750,
			interval: 3000
		});
	// MODAL////////////////////////////////
		$(".icon_search").click(function(){
			$("#modalParent").css("display","block")
			var src=$(this).parent().parent().parent().siblings(".front-portfolio").find("img").attr('src');
			$("#modalParent img").attr("src",src);
		})
		$("#close").click(function(){
			$("#modalParent").css("display","none")
		})
	//	

})