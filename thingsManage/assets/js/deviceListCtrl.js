
mainApp.controller("deviceListCtrl",["$scope","$resource",function ($scope,$resource) {

    /*设备列表信息获取与展示*/
    var obj = $resource("http://localhost:5500/devicelist");
    $scope.deviceList = obj.query();//data返回值为整个接口返回的内容
    console.log($scope.deviceList);
    $scope.show = function (data) {
        // console.log(data);
        $scope.ID = data.id;
        $scope.deviceName = data.deviceName;
        $scope.deviceType = data.deviceType;
        $scope.description = data.description;
        $scope.createTime = data.createTime;
        $scope.status = data.status;
    }



}]);