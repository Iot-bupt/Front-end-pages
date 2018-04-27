mainApp.controller("DevGroupCtrl", ["$scope", function ($scope) {
    $scope.DeviceGroups = [
        {name: 'LIANG', time: '2018-04-13 15:57:55', id: '5ffa1c20-3ef0-11e8-8ea3-6dcd3accf4d6'},
        {name: 'SUNSHINE', time: '2018-04-22 21:57:55', id: '5ffa1c20-4wdb-11e8-8ea3-6dcd3accf4d6'},
        {name: 'TEMPER', time: '2018-06-23 21:57:55', id: '5ffa1c20-4wdb-11e8-8ea3-6dcd3accf4d6'},
        {name: 'MOUSE', time: '2018-05-21 21:57:55', id: '5fds1c20-4wdb-11e8-8ea3-6dcd3accf4d6'},
        {name: 'WIFI', time: '2018-08-2 21:57:55', id: '5ffaw120-4wdb-11e8-8ea3-6dcd3accf4d6'},
        {name: 'FILTER', time: '2018-12-12 21:57:55', id: '3daa1c20-4wdb-11e8-8ea3-6dcd3accf4d6'}
    ];
    //展示设备组详情
    $scope.show = function (DG) {
        //console.log(DG.name);
        $scope.item = {name: DG.name, time: DG.time, id: DG.id};

    };

    //ui-grid的js部分
    $scope.myData = [{name: "天猫", style: "传感器",isIn:false},
        {name: "阿里宝宝", style: "传感器",isIn:true},
        {name: "百度", style: "蓝牙",isIn:true},
        {name: "京东", style: "传感器",isIn:true},
        {name: "腾讯", style: "蓝牙",isIn:false},
        {name: "网易", style: "传感器",isIn:true},
        {name: "Bilibili", style: "蓝牙",isIn:false},
        {name: "AcFun", style: "传感器",isIn:false},
        {name: "新浪", style: "蓝牙",isIn:false},
        {name: "腾讯", style: "传感器",isIn:true},
        {name: "京东", style: "传感器",isIn:true},
        {name: "腾讯", style: "蓝牙",isIn:true},
        {name: "网易", style: "传感器",isIn:true}];



    $scope.gridOptions = {
        data: 'myData',
        enableHorizontalScrollbar: 0,
        columnDefs: [
            {field: 'name', displayName: '设备名称'},
            {field: 'style', displayName: '设备类型'},
            {
                field: 'isIn', displayName: '操作',
                cellTemplate: '<div class="container-fluid"><div class="row cell-action-style"><div class="col-xs-3 text-center"><div class="div-click" ng-click="grid.appScope.goToDelete(row)"><span class="glyphicon shand" ng-class="{true: \'glyphicon-minus\', false: \'glyphicon-plus\'}[row.entity.isIn]"></span></div></div><div></div></div></div>'
            }]
    };

    //弹出删除/关联信息modal
    $scope.goToDelete = function (row) {
        if(row.entity.isIn){
        angular.element('#warnDelAssign').modal({
            backdrop: false
        });
        }else{
            angular.element('#warnAddAssign').modal({
                backdrop: false
            });
        };
    };

}]);