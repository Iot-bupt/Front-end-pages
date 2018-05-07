var level;

//async:false（默认为true）  表示同步加载，会在ajax的success执行完成之后，在执行其他；
//async:true  表示异步加载，可能会在ajax执行完成之后，就执行下面的方法，从而导致data中没有值；
$(document).ready(function () {
    $.ajax({
        url:"http://localhost:5501/my-objects",
        type:"get",
        async : false,
        success:function (msg) {
           console.log(msg[0].level);
           level = msg[0].level;
        }
    });
    console.log(level);
    if(level == 1){
        $("#thingsManage").click(function () {
            window.location.href = "../thingsManage/side-menu-user.html";
        });
    }
    else if(level == 2){
        $("#thingsManage").click(function () {
            window.location.href = "../thingsManage/side-menu-tenantManager.html";
        });
    }
    else if(level == 3){
        $("#thingsManage").click(function () {
            window.location.href = "../thingsManage/side-menu-systemManager.html";
        });
    }

})