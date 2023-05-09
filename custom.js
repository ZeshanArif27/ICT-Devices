$(document).ready(function() {
 
  $("#owl-demo-1").owlCarousel({
      
      autoPlay: false, //Set AutoPlay to 3 seconds
     
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
 
       //Autoplay
    goToFirst : false,
    goToFirstSpeed : 1000,
 
    // Navigation
    navigation : true,
    navigationText : ["prev","next"],
    pagination : false,
    paginationNumbers: true,
  });
   $("#owl-demo-2").owlCarousel({
      
      autoPlay: false, //Set AutoPlay to 3 seconds
     
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
 
       //Autoplay
    goToFirst : false,
    goToFirstSpeed : 1000,
 
    // Navigation
    navigation : true,
    navigationText : ["prev","next"],
    pagination : false,
    paginationNumbers: true,
  });
});