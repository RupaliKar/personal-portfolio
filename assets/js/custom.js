$(document).ready(function(){
  

		$(".hamburger-menu").on('click', function(){
		$(this).toggleClass("open");
		$(".menu-wrapper").toggleClass("open");
		/* $("body, html").toggleClass("ham-active"); */
		
		/* if($('body').hasClass('ham-active')){
			$('body, html').css("overflow", "hiddden");
		} else {
			$('body, html').css("overflow", "");
		} */
	});
		
	
	
		/* PortfolioIsotope Masonry */
		
		var $grid = $('.portfolio_active').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			columnWidth: 1
		  }
		});		
		
		/* Portfolio Menu Isotope */
		$('.portfolio_btn').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
			
	   /* Active Js*/ 

		$('.portfolio_btn button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});	
		
		
		$(document).ready(function(){
			$('#bar1').barfiller({
				barColor:'#CE576B'
			});
			$('#bar2').barfiller({
				barColor:'#CE576B',
			});
			$('#bar3').barfiller({
				barColor:'#CE576B',
			});
			$('#bar4').barfiller({
				barColor:'#CE576B',
			});
			$('#bar5').barfiller({
				barColor:'#CE576B',
			});
			$('#bar6').barfiller({
				barColor:'#CE576B',
			});
			
		});	


	/* Onepage Active */       
        $('.onepage_nav').onePageNav({
            currentClass : 'active',
            scrollSpeed : 1000,
            filter: ':not(.url)'
        }); 
		
/* 	$(".menu-list li.active a").on('click', function(){
	 $(".menu-list li.active a").hide('');
	
  });  */
  
  
  
  
      new WOW().init();
  
  });
  
  
  //Sticky Header
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 20) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  }); 
  
  
//<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});
        })
    //]]>
  
