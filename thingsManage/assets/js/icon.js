$(document).ready(function(){
    $(".homeIconBackground,ul li").mouseover(function(e){
        $(this).siblings().stop().fadeTo(300, 0.5);//动画速度用数字表示时不需加引号
    });
    $(".homeIconBackground,ul li").mouseout(function () {
        $(this).siblings().stop().fadeTo(300, 1);
    });
});