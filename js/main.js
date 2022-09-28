
jQuery(document).ready(function() {

		// init Isotope
		var $grid = $('.gellary-wrap').isotope({
		  // options
		});
		// filter items on button click
		$('.isotop-menu').on( 'click', 'li', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});

	
		//count
			 $('.count').counterUp({
	    	delay: 10,
	   		time: 1000
		});

		//accordion
 		if(typeof($add)=="undefined")var $add={version:{},auto:{disabled:false}};
	  
	  $(function(){for(var k in $add.auto){if(typeof($add.auto[k])=="function"){$add.auto[k]();}}});

	  //jquery for toggle sub menus
     $('.sub-btn').click(function(){
       $(this).next('.sub-menu').slideToggle();
       $(this).find('.side-dropdown').toggleClass('rotate');
     });

 //collapse the sidebar
     $('.menu-btn').click(function(){
       $('.sidebar-menu').addClass('active');
       
     });

     $('.close-btn').click(function(){
       $('.sidebar-menu').removeClass('active');
     });

//main
});