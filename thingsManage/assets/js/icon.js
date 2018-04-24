$(document).ready(function(){
    $(".homeIconBackground,.side-menu-icon,.chooseBtn").mouseover(function(){
        $(this).siblings().stop().fadeTo(300, 0.3);//动画速度用数字表示时不需加引号
    });
    $(".homeIconBackground,.side-menu-icon,.chooseBtn").mouseout(function () {
        $(this).siblings().stop().fadeTo(300, 1);
    });
});