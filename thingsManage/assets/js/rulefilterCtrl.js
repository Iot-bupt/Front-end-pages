mainApp.controller("RulefilterCtrl",function($scope){
    $scope.myData=[{name: "TemperatureFilter",style:"Device Telemetry Filter"},
        {name: "MsgTypeFilter",style:"Message Type Filter"}];
    $scope.gridOptions={
        data: 'myData',
        enableHorizontalScrollbar : 0,
        columnDefs: [
            {field: 'name',displayName: '过滤器名称'},
            {field: 'style',displayName: '过滤器类型'}]};
});