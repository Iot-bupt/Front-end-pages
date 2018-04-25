$(document).ready(function(){
    $(".chooseBtn").mouseover(function(e){
        $(this).siblings().stop().fadeTo(300, 0.3);//动画速度用数字表示时不需加引号
    });
    $(".chooseBtn").mouseout(function () {
        $(this).siblings().stop().fadeTo(300, 1);
    });

});