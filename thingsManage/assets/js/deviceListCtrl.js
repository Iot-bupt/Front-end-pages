
mainApp.controller("deviceListCtrl",["$scope","$resource",function ($scope,$resource) {

    // $scope.num = 2;
    var obj = $resource("http://localhost:5500/devicelist");
    $scope.data = obj.query();//data返回值为整个接口返回的内容
    console.log($scope.data);
   /* document.oncontextmenu = function(){
        return false;
    }
    $(document).ready(function () {
        $(".chooseBtn").contextmenu(function () {

        });
    })
*/


}]);