$(function() {

    /********** carousel for #news **********/
    $(document).ready(function(){
        $(".home-product_carousel").owlCarousel({
            loop: true,
            items: 3,
            autoplay: false,
            dots: true,
            nav: true,
            navText: "",
            autoHeight: true,
            responsive: {
                0: {
                    items: 1,

                    nav: false,
                    autoplay: false,
                },
                575: {
                    nav: true
                },
                960: {
                    items: 3,
                    nav: true,
                },
                1000: {
                    items: 3,
                },
            }
        });
    });
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

                    nav: false,
                    autoplay: false,
                },
                575: {
                    nav: true
                },
                960: {
                    items: 3,
                    nav: true,
                },
                1000: {
                    items: 1,
                },
            }
        });
    });
    $(document).ready(function () {
        function res(){
            let width = $('.product_item').width();
            $('.product_item').height(width);
            $('.home-top_carousel').height(width);
        } res();

        $( window ).resize(function() {
            res();
        });
    });


});




/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}