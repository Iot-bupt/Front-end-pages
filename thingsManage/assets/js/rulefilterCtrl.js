mainApp.controller("RulefilterCtrl",function($scope){
    $scope.myData=[{filters:""}];
    $scope.$on('senddata',function(e,rule) {
        $scope.myData =rule.filters;
    });//父子控制器间通信问题


    $scope.gridOptions={
        data: 'myData',
        enableHorizontalScrollbar : 0,
        columnDefs: [
            {field: 'name',displayName: '过滤器名称'},
            {field: 'filterId',displayName: '过滤器ID'},
            {field: 'type',displayName: '类型'}
           ]};

});