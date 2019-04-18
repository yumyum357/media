  $(document).ready(function() { 
     var screenSize = $(window).width()
      if( screenSize <= 768){
        $(".gnb").hide();
        $(".box").hide();
		
      }
    
   $(".menuOpen").click(function() {
	 $(".gnb").fadeIn('slow');
     $(".box").slideDown('fast');
     
     
   });
   $(".close").click(function() {
	 $(".gnb").fadeOut('fast');
     $(".box").slideUp('slow');
   });
                     
   
   
    var current=0;
   $(window).resize(function(){ 
      screenSize = $(window).width(); 
      if( screenSize > 751){
        $(".gnb").show();
        $(".box").show();
		 current=1;
      }
      if(current==1 && screenSize < 751){
        $(".gnb").hide();
        $(".box").hide();
         current=0;
      }
    }); 
    
  });