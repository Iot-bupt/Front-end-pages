
mainApp.controller("serviceCtrl",["$scope","$location",function ($scope,$location) {
    var mainApp = angular.module("mainApp",["ngRoute","ngAnimate"]);
    mainApp.config(["$routeProvider","$locationProvider",function ($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            .when("/service", {
                templateUrl: "service.html",
                controller: "mainCtrl"
            })
            .otherwise({
                redirectTo: "/service"
            });
    }]);
}]);
