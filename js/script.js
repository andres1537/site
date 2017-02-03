$('.carousel').carousel({
  interval: false
})

$(function() {
	$('.pop').on('click', function() {
		$('.imagepreview').attr('src', $(this).find('img').attr('src'));
		$('#imagemodal').modal('show');   
	});		
});

$(document).ready(function() {
   $("#carousel-example-generic").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#carousel-example-generic").swipeleft(function() {
      $(this).carousel('next');
   });
});