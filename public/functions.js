$(function(){

  
    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
   
    });
  

  
  $("#nav-icon").on("click", ()=>{
      $("nav ul").toggleClass("show", 100, "easeOutSine");
    
  });

  
});