mainApp.controller("RuleCtrl", function ($scope, $resource) {
    //获取规则组信息
    $scope.showAllRule = true;
    $scope.showInfoRule = false;
    $scope.Rulestart = false;
    $scope.Rulestop = false;

    var RULE = $resource('http://localhost:8081/api/rules');//获取所有规则接口
    $scope.Rules = RULE.query(function () {

        //初始化右侧视图
        $scope.Ruleitem = $scope.Rules[0];//Rules[0]获取不到第一个对象咋弄？为啥必须在函数里？
        //console.log($scope.Rules);//此时打印是数组
        console.log("取第一个对象：" + $scope.Ruleitem);
        $scope.$broadcast('senddata', $scope.Ruleitem);
        if ($scope.Ruleitem.rule.state == "ACTIVE") {
            $scope.isActive = true;
            $scope.Rulestart = false;
            $scope.Rulestop = true;
        } else {
            $scope.isActive = false;
            $scope.Rulestart = true;
            $scope.Rulestop = false;
        }
    });
    //console.log($scope.Rules);//此时打印不是数组，而且先运行此处再运行query()里


    //右侧展示视图
    $scope.showrule = function (rule) {
        $scope.Ruleitem = rule;
        //判断规则运行状态
        if ($scope.Ruleitem.rule.state == "ACTIVE") {
            $scope.isActive = true;
            $scope.Rulestart = false;
            $scope.Rulestop = true;
        } else {
            $scope.isActive = false;
            $scope.Rulestart = true;
            $scope.Rulestop = false;
        }
        //把数据发送给表格控制器
        $scope.$broadcast('senddata', $scope.Ruleitem);
    };

    //根据id查找规则
    $scope.searchRule = function () {
        if ($scope.ruleid != "" && $scope.ruleid != null) {
            var searchRULE = $resource('http://localhost:8081/api/rule/:id', {id: '@id'});
            searchRULE.get({id: $scope.ruleid})
                .$promise.then(function (person) {
                console.log("文本框输入内容：" + $scope.ruleid);
                if (person.id.id != undefined) {
                    $scope.showInfoRule = true;
                    $scope.showAllRule = false;
                    $scope.searchresult = person;
                    //console.log("接口返回对象：" + person.rule.name + person.rule.ruleId);
                } else {
                    $scope.showInfoRule = false;
                    alert("无规则组[id=" + $scope.ruleid + "]信息，请输入正确设备组名!");
                }

            });
        }
        else {
            alert("输入不能为空!");
        }
    };

    // 编辑规则名
    /*********无该功能接口
     $scope.editRuleName=function(){
        if ($scope.editrulename != "" && $scope.editrulename != null){
            var editRule = $resource('http://localhost:8081/api/rule/:id', {id: '@id'});
            editRule.save({id: $scope.Ruleitem.id.id},$scope.editrulename)
                .$promise.then(function (resp) {
                console.log("信息修改成功:id=" + $scope.Ruleitem.id.id + ";name=" + $scope.Ruleitem.name);
                $("#editDGName").modal("hide");
               location.reload();
            });
        }else{
           alert("输入不能为空!");
        }
    }
     *********/

    //删除规则
    $scope.delRule = function () {
        var delRULE = $resource('http://localhost:8081/api/rule/delete:id', {id: '@id'});
        delRULE.delete({}, {id: $scope.Ruleitem.id.id}, function (resp) {
            console.log("删除成功:id=" + $scope.Ruleitem.id.id + ";name=" + $scope.Ruleitem.name);
            $("#delDG").modal("hide");
            location.reload();
        }, function (resp) {
            console.log("1234再来一次");
            alert("删除失败，请重试！")
        });
    }

    //启动规则
    $scope.startRule = function () {
        $scope.state1 = "ACTIVE";
        var editRule = $resource('http://localhost:8081/api/rule/:id/activate', {id: '@id'});
        editRule.save({id: $scope.Ruleitem.id.id}, $scope.state1)
            .$promise.then(function (resp) {
            console.log("规则激活成功:id=" + $scope.Ruleitem.id.id + ";state=" + $scope.Ruleitem.state);
            $("#editDGName").modal("hide");
            location.reload();
        });
    }

    //暂停规则
    $scope.stopRule = function () {
        $scope.state2 = "UNACTIVE";
        //此处接口应换成http://localhost:8081/api/rule/:id/suspend
        var editRule = $resource('http://localhost:8081/api/rule/:id/activate', {id: '@id'});
        editRule.save({id: $scope.Ruleitem.id.id}, $scope.state2)
            .$promise.then(function (resp) {
            console.log("规则激活成功:id=" + $scope.Ruleitem.id.id + ";state=" + $scope.Ruleitem.state);
            $("#editDGName").modal("hide");
            location.reload();
        });
    }
});