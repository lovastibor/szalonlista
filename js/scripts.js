
 $( document ).ready(function() {

     $('input').iCheck({
    checkboxClass: 'icheckbox_minimal-purple',
    radioClass: 'iradio_minimal-purple',
    increaseArea: '20%' // optional
  });

   // $('#collapseOne').collapse('toogle');


 

    $('[data-toggle="popover"]').popover({trigger: 'hover','placement': 'top'});
    $('[data-toggle="tooltip"]').tooltip({'placement': 'right'});
    $('[data-toggle="tooltip_top"]').tooltip({'placement': 'top'});


 // The menu on the left


    $('nav#menu-left').mmenu();




//  The menu on the right


    var $menu = $('nav#menu-right');

    $menu.mmenu({
        position    : 'right',
        classes     : 'mm-light',
        counters    : false,
        searchfield : false,
        header      : {
            add         : false,
            update      : true,
            title       : 'Contacts' 
        }
    });

//  Click a menu-item



    var $confirm = $('#confirmation');
    $menu.find( 'li a' ).not( '.mm-subopen' ).not( '.mm-subclose' ).bind(
        'click.example',
        function( e )
        {
            e.preventDefault();
            $confirm.show().text( 'You clicked "' + $.trim( $(this).text() ) + '"' );
            $('#menu-right').trigger( 'close' );
        }
    );

    



 // Scrolling bookmark




  // $('a[href*=#]:not([href=#]):not([data-toggle=modal])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top - 80
  //       }, 1000);
  //       return false;
  //     }
  //   }
  // });

    
// Hiding header




    // Hide Header on on scroll down
    var sWidth = $(window).width();
    var mobileWidth = 767;
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar-toggle').outerHeight();
    
    $(window).resize(function(event){
        sWidth = $(window).width();
        lastScrollTop = $(this).scrollTop();
        if( sWidth >= mobileWidth && lastScrollTop + $(window).height() < $(document).height()) {
            $('.navbar-toggle').removeClass('nav-up').addClass('nav-down');
        }
    });
        
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    setInterval(function() {
        if (sWidth < mobileWidth &&  didScroll) {
            hasScrolled();
            didScroll = false;
        }
}, 250);
    
function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar-toggle').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar-toggle').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


// $('#map-canvas2:after').click(function(){
//     $(this).animate({height:'450'})
// })
// $('#map-canvas2:after').click(function(){
//     $(this).animate({height:'150'})
// })
$('#map-canvas2').click(function() {
    $('#map-canvas2').animate({height:'500' });
    $('.gm-style ').animate({height:'500' });
     $('.closemap').fadeIn({ });
}); 
$('.closemap').click(function() {
    $('#map-canvas2').animate({height:'150' });
    $('.closemap').fadeOut({ });
}); 

// $('.filter-box-link').click(function() {
//     $('.filterbox').animate({height: '300'});
//     $('.overlay-filter').fadeOut({ });
// });
//  var open = false;
// $('.filterbox').click(function() {

//     if(open === false){
            
//             $(this).css({height: 'auto'});
//             $('.overlay-filter').fadeOut({ });
//              open = true;
//     } else {
//          $('.overlay-filter').fadeIn({ });
//              open = false;
//      }
// });
$('.filterbox').click(function() {
    $(this).css({height:'auto' });
    $('.overlay-filter').fadeOut({ });
    $('.closefilter').fadeIn({ });
}); 
$('.closefilter').click(function() {
    $('.filterbox').animate({height:'150' });
    $('.closefilter').fadeOut({ });
    $('.overlay-filter').fadeIn({ });
}); 
// Checkbox change js


        var open = false;
    $('#footerSlideButton').click(function() {
        if(open === false) {
            $('#footerSlideContent').animate({ height: '380px' });
            $(this).css('backgroundPosition', 'bottom left');
            open = true;
        } else {
            $('#footerSlideContent').animate({ height: '0px' });
            $(this).css('backgroundPosition', 'top left');
            open = false;
        }
    });    
    
    // $(".collapse").collapse('toogle');   
});
