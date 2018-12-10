$(document).ready(function(){
  $('.hamburger').click(function(e){
    e.preventDefault();
    $(this).toggleClass('is-active'),$(".navbar").toggleClass("active");
  });
});