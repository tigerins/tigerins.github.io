$(document).ready(function () {   

    $('.boxs').hover(
        function () {
            $('ul:first', this).slideDown(150);  
        },
        function () {
            $('ul:first', this).slideUp(150);
        }
    ); 
});