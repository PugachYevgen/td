$(function() {

    /********** carousel for #news **********/
    $(document).ready(function(){
        $(".home-top_carousel").owlCarousel({
            loop: true,
            items: 1,
            autoplay: false,
            dots: true,
            nav: true,
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
                375: {
                    nav: false,
                    items: 1

                },
                992: {
                    nav: false
                },
                1360: {

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

        $(window).resize(function() {
            res();
        });
    });

    $(document).ready(function () {
        $('.btn-secondary').click(function () {
            $(this).next().toggleClass('rotate');
        })
    })

});



