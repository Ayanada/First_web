/*global $ ,jQuery ,alert */
$(function () {
    'use strict';
    
      // Nice Scroll
    
    $("html").niceScroll();
    $('.carousel').carousel({
        interval: 5000
        
    });
    
    // Add links add active class
    
    $('.navbar-nav li a').on('click', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    
    });
    
 // Adjust Slider Height  
    
    var windowHeight = $(window).height(),
        upperH       = $('.upper-bar').innerHeight(),
        navH         = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(windowHeight - (upperH + navH));

});