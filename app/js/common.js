$(function() {

    /********** carousel for #news **********/
    $(document).ready(function(){
        $(".home-top_carousel").owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            dots: true,
            nav: true,
            // autoWidth: true,
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
                992: {
                    nav: false
                },
                1360: {

                },
            }
        });
    });

    $(document).ready(function(){
        $(".home-product_carousel").owlCarousel({
            loop: true,
            items: 3,
            autoplay: true,

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
                    items: 1
                },
                992: {
                    nav: false,
                    items: 3
                },
                1400: {
                    nav: true
                },
            }
        });
    });

    $(document).ready(function () {
        function res(){
            let width = $('.product_item').outerWidth();
            $('.product_item').height(width);
            $('.home-top_carousel').height(width);
            $('.item__card').width(width);
            $('.home-top_carousel-poster').width(width * 2)
        } res();
        window.addEventListener('resize', function() {
            setTimeout(res, 300);
        });

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
        $('.btn-secondary').click(function () {
            $(this).next().toggleClass('rotate');
        })
    })

}); //end f



