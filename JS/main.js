$(document).ready(function () {
    $(document).click(function (e) {
        var target = $(e.target).closest('#hide-menu');
        var check = $(e.target).parents('.menu-left')
        if (target.length != 0 || check.length != 0) {
            $('.menu-left').css("left","0px");
            $('.main').css("display","block");
        }
        else {
            $('.menu-left').css("left","-250px");
            $('.main').css("display","none");
        }
    })


    var body_menu = document.querySelector('.body-menus').offsetTop;
    $(document).scroll(function () {
        if(window.pageYOffset >= body_menu) {
            $('.body-menus').addClass('stiky');
        }
        else {
            $('.body-menus').removeClass('stiky');
        }
    })
})
