mainApp.controller("DevGroupCtrl",["$scope",function($scope){
    $scope.DeviceGroups=[
		{name:'LIANG',num:1,time:'2018-04-13 15:57:55',id:'5ffa1c20-3ef0-11e8-8ea3-6dcd3accf4d6'},
		{name:'SUNSHINE',num:2,time:'2018-04-22 21:57:55',id:'5ffa1c20-4wdb-11e8-8ea3-6dcd3accf4d6'},
		{name:'TEMPER',num:2,time:'2018-04-22 21:57:55',id:'5ffa1c20-4wdb-11e8-8ea3-6dcd3accf4d6'},
		{name:'MOUSE',num:2,time:'2018-04-22 21:57:55',id:'5ffa1c20-4wdb-11e8-8ea3-6dcd3accf4d6'},
		{name:'WIFI',num:2,time:'2018-04-22 21:57:55',id:'5ffa1c20-4wdb-11e8-8ea3-6dcd3accf4d6'},
		{name:'FILTER',num:2,time:'2018-04-22 21:57:55',id:'5ffa1c20-4wdb-11e8-8ea3-6dcd3accf4d6'}
	];

	//ui-grid的js部分
    $scope.myData = [{name: "天猫", style: "传感器"},
        {name: "阿里宝宝", style: "传感器"},
        {name: "百度", style: "蓝牙"},
        {name: "京东", style: "传感器"},
        {name: "腾讯", style: "蓝牙"},
        {name: "网易", style: "传感器"},
        {name: "Bilibili", style: "蓝牙"},
        {name: "AcFun", style: "传感器"},
        {name: "新浪", style: "蓝牙"},
        {name: "腾讯", style: "传感器"},
        {name: "京东", style: "传感器"},
        {name: "腾讯", style: "蓝牙"},
        {name: "网易", style: "传感器"}];
    $scope.gridOptions = {
        data: 'myData',
        enableHorizontalScrollbar: 0,
        columnDefs: [
            {field: 'name', displayName: '设备名称'},
            {field: 'style', displayName: '设备类型'},
            {
                field: 'but', displayName: '操作',
                cellTemplate: '<div class="container-fluid"><div class="row cell-action-style"><div class="col-xs-3 text-center"><div class="div-click"  ng-click="grid.appScope.goToDelete(row)"><span class="glyphicon glyphicon-minus shand" aria-hidden="true"></span></div></div><div></div></div></div>'
            }]
    };

    //弹出删除信息modal
    $scope.goToDelete = function (row) {
        angular.element('#warnDelAssign').modal({
            backdrop: false
        });
    };

}]);