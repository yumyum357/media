$(document).ready(function () {
    var screenSize = $(window).width();
    var screenHeight = $(window).height();
    var current=false; //페이지가 열린상태에서는 화면사이즈를 늘리고 줄여도 계속 재생이되게해줌 !!빼면 사이즈 조절할때마다 영상이 다시 시작 됨! //처음에 재생이 안된 상태에서 시작!

   
     $(".main .main1,.main .main2").css('height', screenHeight);
    
        if( screenSize > 768){
        $("#videoBG").show();
        $("#imgBG").hide();
      }
        if(screenSize <= 768){ //소형태블릿부터 모바일!은
        $("#videoBG").hide();
        $("#videoBG").attr('src','');//#videoBG가불러올 영상의 경로를 없애버리는것!! 실제로 비디오태그가 실행되지 않게!!
        $("#imgBG").show();
        }
        
        if(screenSize <= 623){
        $(".main .main1,.main .main2").css('height', screenHeight/2);
            
        }

  
    $(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        screenSize = $(window).width();
        screenHeight = $(window).height();
        $(".main .main1,.main .main2").css('height', screenHeight);
        
        
         if( screenSize > 768 && current==false){
      	
        $("#videoBG").show();
        $("#videoBG").attr('src','video/video.mp4');
        $("#imgBG").hide();
        current=true;
      }
      if(screenSize <= 768){
        $("#videoBG").hide();
        $("#videoBG").attr('src','');
        $("#imgBG").show();
        current=false;
      }
       
     if(screenSize <= 623){
        $(".main .main1,.main .main2").css('height', screenHeight/2);
            
        }

      
    });


    $('.down').click(function () {
        screenHeight = $(window).height();
        $('html,body').animate({
            'scrollTop': screenHeight
        }, 1000);
    });
    
//    album swiper부
    window.onload = function(){
		var swiper = new Swiper('.swiper-container', {
					 pagination: '.swiper-pagination',
					 paginationType: 'progress',
					 slidesPerView: 'auto',
					 paginationClickable: true,
					 spaceBetween: 0,
					 freeMode: true,
					 nextButton: '.next',
					 prevButton: '.back'
		 });
	};
    
    



});
