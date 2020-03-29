$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__row_second').toggleClass('active');
	});
});





$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 600, 'linear');
});


