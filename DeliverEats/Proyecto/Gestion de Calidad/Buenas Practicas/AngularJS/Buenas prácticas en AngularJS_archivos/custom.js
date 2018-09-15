var $ = jQuery.noConflict();
(function($) {
'use strict';
$(document).ready(function() {
  'use strict';
  
  /* FIT VIDEOS WITH SCREEN SIZE */
   $(".video-player").fitVids();

   /* CONTENT LOADER */
   $('.content-to-load').jscroll({
      nextSelector: 'a.jscroll-load-more',
     loadingHtml: '<div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"><span> 75% </span></div></div>',
     autoTrigger: true,
     callback: function() {
      $(".video-player").fitVids();
      $('.jscroll-added').last().find('.mejs-player').mediaelementplayer();
     }
   });
   $('.searchform input[type="text"]').attr('placeholder','Search for');
   $('.mc_input').addClass('form-control').attr('placeholder','@yourmail.com');
   $('.mc_merge_var').addClass('input-group');
   $('#mc_signup_submit').addClass('btn-prime').val('go');
   $('.mc_signup_submit').addClass('input-group-btn');
   if($('.blog-style-one,.blog-style-two').length&&($('.left-sidebar').length)){
    var height_b = $('.blog-style-one').height();
    var height_s = $('.right-sidebar').height();
	if(height_s>(height_b)){
		$('.footer').css('padding-top','100px');
		$('.right-sidebar').addClass('right-sidebar-ok');
		
	}
	if($('.left-sidebar').length){
		var height_l = $('.left-sidebar>div').height();
		if(height_l>height_b){
		$('.footer').css('padding-top','80px');
		$('.footer').css('margin-top','50px');
		
		}	
	}
   }
});

/* LITTLE ANIMATION ON NAVBAR ON-SCROLL */
$(window).scroll(function() {    
  'use strict';
      var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header .navbar").addClass("sticky");
    } else {
        $("header .navbar").removeClass("sticky");
    }
});

/* TWEETER FEED */
if($('.tweet').length){
  'use strict';
$('.tweet').each(function(){

			var ele = $(this);
			var user_t = $(this).data('username');
			var count_t = $(this).data('count');
			$(ele).twittie({
  dateFormat: "%B %d, %Y",
  template: '<p class="twt">{{tweet}}</p> <p class="date">{{date}}</p>',
  hideReplies: true,
  username:user_t,
  count:count_t
});
});
}

/*****************************************************
 ******************* - Irontec - *********************
 *****************************************************/

    /**
     * Buscador
     */
    
    $('#search .btnSearch').on('click', function() {
        var currentHeight = $('#dropdown-search-full').css('height');
        
        if (currentHeight == '0px') {
            $('#dropdown-search-full').css('height', '60px');
        } else {
            $('#dropdown-search-full').css('height', '0px');
        }
        
    });
    
    var searchAction = function(value, url) {
        var query = url + '?q=' + value;
        window.location = query;
    };
    
    $('#sidebar-search .btnSidebarSearch').on('click', function(event) {
        searchAction($('#sidebar-search input').val(), $('#sidebar-search input').attr('data-searchUrl'));
    });
    
    $('#sidebar-search input').on('keypress', function(event) {
        if (event.which == 13) {
            searchAction($(event.target).val(), $(event.target).attr('data-searchUrl'));
        }
    });
    
    $('#search input').on('keypress', function(event) {
        if (event.which == 13) {
            searchAction($(event.target).val(), $(event.target).attr('data-searchUrl'));
        }
    });
    
    $('#nav-menu li.dropdown').on('hover', function() {
        if (!$(this).hasClass('open')) {
            $(this).addClass('open');
        } else {
            $(this).removeClass('open');
        }
    });
    
    $('#irontec-header #sidebar-menu > div').on('click', function() {
        var currentWidth = $('#sidebar-menu').css('right');
        
        if (currentWidth == '0px') {
            $('#sidebar-menu').css('right', '255px');
            $('#irontec-header .sidebar-menu-content').css('width', '255px');
        } else {
            $('#sidebar-menu').css('right', '0px');
            $('#irontec-header .sidebar-menu-content').css('width', '0px');
        }
    });
    
    $(document).on("click",".submenu",function(){
        $(this).next(".submenu-content").slideToggle("slow");
    });
    
    $('#menu-menu3 .menu-item-has-children a.dropdown-toggle').on('click', function(event) {
        event.preventDefault();
        return false;
    });

})(jQuery);