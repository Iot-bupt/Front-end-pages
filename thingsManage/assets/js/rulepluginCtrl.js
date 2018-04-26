mainApp.controller("RulepluginCtrl",function($scope){
    $scope.myData=[{name: "System RPC Plugin"},
        {name: "System Telemetry Plugin"},
        {name: "Mail Plugin"},
        {name: "Device Control Plugin"}
    ];
    $scope.gridOptions={
        data: 'myData',
        enableHorizontalScrollbar : 0,
        columnDefs: [
            {field: 'name',displayName: '插件名称'}]};
});