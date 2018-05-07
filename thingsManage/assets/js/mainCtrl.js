var mainApp = angular.module("mainApp",["ngRoute","ngAnimate","ui.grid","ngResource"]);
mainApp.config(["$routeProvider","$locationProvider",function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/homePage", {
            templateUrl:"homePage.html",
            controller:"mainCtrl"
        })
        .when("/deviceList",{
            templateUrl:"deviceList.html",
            controller:"mainCtrl"
        })
        .when("/deviceGroup",{
            templateUrl:"deviceGroup.html",
            controller:"mainCtrl"
        })
        .when("/service",{
            templateUrl:"service.html",
            controller:"mainCtrl"
        })
        .when("/plugins",{
            templateUrl:"plugins.html",
            controller:"mainCtrl"
        })
        .when("/rules",{
            templateUrl:"rules.html",
            controller:"mainCtrl"
        })
        .when("/evaluate",{
            templateUrl:"evaluate.html",
            controller:"mainCtrl"
        })
        .when("/customer",{
            templateUrl:"customer.html",
            controller:"mainCtrl"
        })
        .when("/tenant",{
            templateUrl:"tenant.html",
            controller:"mainCtrl"
        })
        .otherwise({
            redirectTo:"/homePage"
        });
}]);

mainApp.controller("mainCtrl",["$scope","$location",function ($scope,$location) {
    /*路由跳转*/
    $scope.$location = $location;

    /*突出显示效果*/
    $(document).ready(function(){
        $(".homeIconBackground,.side-menu-icon,.chooseBtn").mouseover(function(){
            $(this).siblings().stop().fadeTo(300, 0.3);//动画速度用数字表示时不需加引号
        });
        $(".homeIconBackground,.side-menu-icon,.chooseBtn").mouseout(function () {
            $(this).siblings().stop().fadeTo(300, 1);
        });
    });

    $scope.num = 1;
}]);
