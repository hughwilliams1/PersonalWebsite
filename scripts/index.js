$(document).ready(function() {
  //Get Element
  var scrollLink = $('.scroll');
  //Smooth Scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({scrollTop: $(this.hash).offset().top}, 1000);
  })

})