mainApp.controller("RulepluginCtrl",function($scope){

    $scope.myData=[{pluginToken:""}];
    $scope.$on('senddata',function(e,rule) {
        $scope.myData =[rule];
    });//父子控制器间通信问题

        $scope.gridOptions={
        data: 'myData',
        enableHorizontalScrollbar : 0,
        columnDefs: [
            {field: 'pluginToken',displayName: '插件Token'}]};
});