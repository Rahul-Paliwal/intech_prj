
(function ($) {
    'use strict';
    
    
    var win = $(window),
        scrollUp = $(".scroll-up"),
        btnMenuNavbar = $('.navbar-toggle'),
        navMenu = $(".nav-menu"),
        listMenu = $("ul.nav-menu li a"),
        navbar = $('.nav-bar-fixed'),
        btnOpenSideMenu = $(".side-menu-btn"),
        sideMenuItem = $(".side-menu"),
        closeSidebarOverLay = $(".close-menu-sidebar"),
        btnCloseSideMenu = $(".close-side-menu"),
        body = $("body"),
        sticky,
        btnOpenSearch = $(".search-btn"),
        searchScreenItem = $(".search-screen"),
        closeSearchScreen = $(".close-search");
    
    btnMenuNavbar.on("click", function (e) {
        e.preventDefault();
        navMenu.slideToggle();
        $(this).toggleClass("navbar-toggle-active");
    });
    
    listMenu.on("click", function (e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu !== null) {
            e.preventDefault();
            $(submenu).slideToggle();
        }
    });
    
    

    new WOW().init();
    
    /*---loading---*/
    $(window).on('load', function () {
        $(".loading-screen").fadeOut();
    });
    $('select').niceSelect();
    

    
     /*========== Start Navbar Auto Change  ==========*/
    win.on('scroll', function () {
        if (win.scrollTop() > 45) {
            navbar.addClass('nav-fixed-two').removeClass('fixed-top-one');
        } else {
            navbar.addClass('fixed-top-one').removeClass('nav-fixed-two');
        }
    });
    
    
    
    
    function animateProgressBar() {
        $('.skill-box .progress-line > span').each(function () {
            var percent = $(this).data('percent');
            $(this).css({
                width: percent + '%',
                transition: 'width 1.5s linear'
            });
        });
    }
    if ($('.about')[0]) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > $('.about').offset().top + 200) {
                animateProgressBar();
            }
        });
        if ($(window).scrollTop() > $('.about').offset().top + 200) {
            animateProgressBar();
        }
     
    }
    
    
    
    
    
    
    /*========== Start OWL Carousel Js Slider Hero   ==========*/
    if ($('.slider-hero')[0]) {
        
        $(".slider-hero").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            smartSpeed: 1000,
            autoplay: 1000,
            loop: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
    $(".slider-hero").on("translate.owl.carousel", function () {
        $(".info-header .inner-banner").removeClass("animated fadeOut").css("opacity", "0");
        $(".info-header .top-title-header").removeClass("animated fadeInUp").css("opacity", "0");
        $(".info-header h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".info-header .text-header").removeClass("animated fadeInDown").css("opacity", "0");
        $(".banner-btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider-hero").on("translated.owl.carousel", function () {
        $(".info-header .inner-banner").removeClass("animated fadeIn").css("opacity", "1");
        $(".info-header .top-title-header").addClass("animated fadeInUp").css("opacity", "1");
        $(".info-header h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".info-header .text-header").addClass("animated fadeInDown").css("opacity", "1");
        $(".banner-btn").addClass("animated fadeInDown").css("opacity", "1");
    });
    
    
    
    
    /*========== Start Counter To Js Statistics   ==========*/
    if ($(".count")[0]) {
        win.on('scroll.statistics', function () {
            var stat = $('.statistics');
            if ($(this).scrollTop() >= stat.offset().top - win.height() + 220) {
                $('.count').countTo();
                win.off('scroll.statistics');
            }
        });
    }
    
    /*========== Start Scroll For Link To Go Section  ==========*/
    if ($(".down")[0]) {
        $('.down').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 81
            }, 1000);
        });
    }
    
    
    /* ========== Start OWL Carousel Js testimonial   ==========*/
    if ($('.about-carousel')[0]) {
        $('.about-carousel').owlCarousel({
            loop: true,
            margin: 0,
            smartSpeed: 1000,
            autoplay: 2000,
            nav: true,
            dots: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
   
    

    
     /*========== Start Magnigic Popup Js ==========*/
    if ($('.case-item')[0]) {

        $('.case-item').magnificPopup({
            delegate: '.zoom-case a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    

  
    /*========== Start OWL Carousel Client Slider   ==========*/
    if ($('.sponsor')[0]) {
        $('.sponsor').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            autoplay: 2000,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });
    }
    
    if ($('.services-carousel')[0]) {
        $('.services-carousel').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            autoplay: 2000,
            nav: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                575: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    
    
    if ($('.single-case-slider')[0]) {
        $('.single-case-slider').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            autoplay: 2000,
            nav: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    
    /*========== Start Scroll Up    ==========*/
    // Show And Hide Buttom Back To Top
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 600) {
            scrollUp.show(300);
        } else {
            scrollUp.hide(300);
        }
    });
    // Back To 0 Scroll Top body
    scrollUp.on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    


    if ($('.sticky-navbar')[0]) {
        sticky = new Waypoint.Sticky({
            element: $('.sticky-navbar')[0]
        });
    }
    

}($));
// table slide up

  

 /*========== Projects table auto scroll   ==========*/
$(document).ready(function() {
  
    pageScroll();
    $("#contain").mouseover(function() {
      clearTimeout(my_time);
    }).mouseout(function() {
      pageScroll();
    });
    
    getWidthHeader('table_fixed','table_scroll');
    
  });
  
  var my_time;
  function pageScroll() {
      var objDiv = document.getElementById("contain");
    objDiv.scrollTop = objDiv.scrollTop + 1;  
    if ((objDiv.scrollTop + 100) == objDiv.scrollHeight) {
      objDiv.scrollTop = 0;
    }
    my_time = setTimeout('pageScroll()', 25);
  }
  
  function getWidthHeader(id_header, id_scroll) {
    var colCount = 0;
    $('#' + id_scroll + ' tr:nth-child(1) td').each(function () {
      if ($(this).attr('colspan')) {
        colCount += +$(this).attr('colspan');
      } else {
        colCount++;
      }
    });
    
    for(var i = 1; i <= colCount; i++) {
      var th_width = $('#' + id_scroll + ' > tbody > tr:first-child > td:nth-child(' + i + ')').width();
      $('#' + id_header + ' > thead th:nth-child(' + i + ')').css('width',th_width + 'px');
    }
  }
  

 /*========== Projects table1 auto scroll   ==========*/   
$(document).ready(function() {
      $('ul.nav-menu> li') 
                    .click(function (e) { 
                $('ul.nav-menu > li') 
                    .removeClass('active'); 
                $(this).addClass('active'); 
            }); 
  
    pageScroll1();
    $("#contains").mouseover(function() {
      clearTimeout(my_time);
    }).mouseout(function() {
      pageScroll1();
    });
    
    getWidthHeader('table_fixd','table_scrol');
    
  });
  
  var my_time;
  function pageScroll1() {
      var objDiv = document.getElementById("contains");
    objDiv.scrollTop = objDiv.scrollTop + 1;  
    if ((objDiv.scrollTop + 100) == objDiv.scrollHeight) {
      objDiv.scrollTop = 0;
    }
    my_time = setTimeout('pageScroll1()', 25);
  }
  
  function getWidthHeader(id_header, id_scroll) {
    var colCount = 0;
    $('#' + id_scroll + ' tr:nth-child(1) td').each(function () {
      if ($(this).attr('colspan')) {
        colCount += +$(this).attr('colspan');
      } else {
        colCount++;
      }
    });
    
    for(var i = 1; i <= colCount; i++) {
      var th_width = $('#' + id_scroll + ' > tbody > tr:first-child > td:nth-child(' + i + ')').width();
      $('#' + id_header + ' > thead th:nth-child(' + i + ')').css('width',th_width + 'px');
    }
  }
      


  