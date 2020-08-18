

$(function() {


    $(document).ready(function(){
        $(".home-product_carousel").owlCarousel({
            loop: true,
            items: 3,
            autoplay: false,
            dots: false,
            nav: true,
            navText: "",
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                    nav: false,
                    autoplay: false,
                },
                576: {
                    nav: false,
                    items: 2
                },
                800: {
                    nav: false,
                    items: 3
                },
                1024: {
                    nav: false,
                    items: 3
                },
                1400: {
                    nav: true
                },
            }
        });
    });

    /********** carousel for #news **********/
    $(document).ready(function(){
        $(".home-top_carousel").owlCarousel({
            loop: true,
            items: 1,
            autoplay: false,
            dots: true,
            nav: true,

            stagePadding: -1,
            navText: "",
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                    nav: false,
                    autoplay: false,
                },
                375: {
                    nav: false
                },
                1024: {
                    nav: false
                },
                1360: {

                },
            }
        });
    });



    $(document).ready(function () {
        function res(){
            let mql = window.matchMedia('all and (max-width: 576px)');
            let width = $('.product_item').outerWidth();
            $('.product_item').height(width);
            $('.home-top_carousel').height(width);
            $('.item__card').width(width);
            $('.home-top_carousel-poster').width(width * 2);
            if (mql.matches) {
                $('.home-top_carousel-poster').width(width);
            } else{
                $('.home-top_carousel-poster').width(width * 2);
            };
        } res();
        window.addEventListener('resize', function() {
            setTimeout(res, 300);
        });

    });
    $(document).ready(function () {
        function func() {
            let mql = window.matchMedia('all and (max-width: 576px)');
            let width = $('nav').outerWidth();
            if (mql.matches) {
                $('nav .dropdown-item.show').width(width)
            }
        } func();
    });

    // $(document).ready(function () {
    //     function asideHeight() {
    //         let height = $('body').height();
    //         $('aside').height(height);
    //     } asideHeight();
    //     window.addEventListener('resize', function() {
    //         setTimeout(asideHeight, 300);
    //     });
    // });

    $(document).ready(function () {
        $('nav .btn-secondary').click(function () {
            $(this).next().toggleClass('rotate');
        })
    });
    $(document).ready(function () {
        $('.accout-profile .btn-secondary').click(function () {
            $(this).toggleClass('acc-rotate');
        })
    });
    $('.burger').on('click', function() {
        $(this).toggleClass('active')
        $('nav').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });

    });

    $('.thumbs').delegate('img','click', function(){
        $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
    });

    $(document).ready(function () {
        function res1(){

            let width = $('.thumbs div').outerWidth();
            $('.thumbs div').height(width);
            $('.thumbs div img').width(width /1.5);

        } res1();
        window.addEventListener('resize', function() {
            setTimeout(res1, 300);
        });

    });
    $(document).ready(function () {
        function res2(){

            let width = $('.panel').outerWidth();
            $('.panel').height(width);
            $('.panel img').height(width /1.3);

        } res2();
        window.addEventListener('resize', function() {
            setTimeout(res2, 300);
        });

    });

}); //end f

