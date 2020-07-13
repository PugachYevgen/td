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
            navText: ""

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


});



//
// /* When the user clicks on the button,
//  toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
//
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// };
//
// /* When the user clicks on the button,
//  toggle between hiding and showing the dropdown content */
// function myFunction2() {
//     document.getElementById("myDropdown2").classList.toggle("show");
// }
//
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn2')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content2");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
