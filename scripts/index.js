$(document).ready(function() {
  var typed = new Typed(".type", {
    strings: ["Hugh Williams"],
    typeSpeed: 110,
  });

  sal({
    threshold: 0.4,
  });
  //Get Element
  var scrollLink = $('.scroll');
  //Smooth Scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({scrollTop: $(this.hash).offset().top}, 1500);
  })
})
