mainApp.controller("GridCtrl",function($scope){
	$scope.myData=[{name: "天猫",style:"传感器"},
					{name: "阿里宝宝",style:"传感器"},
					{name: "百度",style:"蓝牙"},
					{name: "腾讯",style:"传感器"}];
	$scope.gridOptions={
		data: 'myData',
        enableHorizontalScrollbar : 0,
		columnDefs: [
		{field: 'name',displayName: '设备名称'},
		{field: 'style',displayName: '设备类型'},
		{field: 'but',displayName: '操作',
				 cellTemplate : '<div class="container-fluid"><div class="row cell-action-style"><div class="col-xs-3 text-center"><div class="div-click"  ng-click="grid.appScope.goToDelete(row)"><span class="glyphicon glyphicon-minus shand" aria-hidden="true"></span></div></div><div></div></div></div>'
		}]};
		
	//弹出删除信息modal
    $scope.goToDelete=function(row){  
           angular.element('#warnDelAssign').modal({  
                   backdrop: false  
               });  
       }; 
});
