var DeviceGroup=angular.module('DeviceGroup',['ui.grid']);
mainApp.controller("DevGroupCtl",["$scope","$location",function($scope,$location){
	$scope.myData=[{name: "liang",num:10},
					{name: "Tim",num:3},
					{name: "kangkang",num:5},
					{name: "Anna",num:4}];
	$scope.gridOptions={
		data: 'myData',
        enableHorizontalScrollbar : 0,//表格的水平滚动条
        enableVerticalScrollbar : 1,
		columnDefs: [
		{field: 'name',displayName: '设备组名称'},
		{field: 'num',displayName: '关联设备个数'},
		{field: 'but',displayName: '操作',
			cellTemplate : '<div class="container-fluid"><div class="row cell-action-style"><div class="col-xs-3 text-center"><div class="div-click"  ng-click="grid.appScope.goToUpdate(row)"><span class="glyphicon glyphicon-edit shand" aria-hidden="true"></span></div></div><div class="col-xs-3 text-center"><div class="div-click"  ng-click="grid.appScope.goToAssign(row)"><span class="glyphicon glyphicon-th-list shand" aria-hidden="true"></span></div></div><div class="col-xs-3 text-center" ><div class="div-click"  ng-click="grid.appScope.goToDelete(row)"><span class="glyphicon glyphicon-remove shand" aria-hidden="true"></span></div></div><div></div></div></div>'
		}
		]
		};
	$scope.goToUpdate=function(){
        angular.element('#editDelete').modal({
            backdrop: false
        });
    };

	//跳转到设备详情页
	$scope.goToAssign=function(){
        $location.path('/deviceGroupAssign')
	};

	//弹出删除信息modal
    $scope.goToDelete=function(row){
    	angular.element('#warnDelete').modal({
			backdrop: false
              });
       }; 
}]);
