$(document).ready(function () {
    /*
       登录验证
   */
    $("#login").click(function (event) {

        //window.location.href="chooseIndex.html";//原窗口打开
        // window.open("chooseIndex.html");//新窗口打开
        $.ajax({
            url:"http://localhost:5501/my-objects",
            //data:$("#form-username").val(),
            dataType:"json",
            type:"GET",
            success:function(msg){
                console.log($("#form-username").val());
                console.log($("#form-password").val());
                console.log(msg[0].username);
                console.log(msg[0].password);

                if(msg[0].username == $("#form-username").val() && msg[0].password == $("#form-password").val()){
                    window.location.href = "chooseIndex.html";
                }
                else if($("#form-username").val() && $("#form-password").val()){
                    /*window.event.returnValue = false;
                    setTimeout(function () {
                       toastr.error("用户名或密码错误！");
                   },1000);*/

                   alert("用户名或密码错误！");
                }
            }
        });
    });
    /*
       修改密码验证
   */
    $("#modify").click(function (event) {
         // event.preventDefault();
        //window.location.href="modifyPassword.html";//原窗口打开
        // window.open("modifyPassword.html");//新窗口打开
        $.ajax({
            url:"http://localhost:5501/my-objects",
            //data:$("#form-username").val(),
            dataType:"json",
            type:"GET",
            success:function(msg){
                if(msg[0].username == $("#form-username").val() && msg[0].password == $("#form-password").val()){
                    window.location.href = "modifyPassword.html";
                }
                else if($("#form-username").val() && $("#form-password").val()){
                    alert("用户名或密码错误！");
                }
            }
        });
    });
    /*
        返回按钮
    */
    $("#cancel").click(function () {
        window.location.href="index.html";//原窗口打开
    });

    /*
       保存修改
    */
    $("#save").click(function (event) {
        /*输入框效果*/
        $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
            $(this).removeClass('input-error');
        });

        $('.login-form').on('submit', function(e) {

            $(this).find('input[type="text"], input[type="password"], textarea').each(function(){
                if( $(this).val() == "" ) {
                    e.preventDefault();
                    $(this).addClass('input-error');
                }
                else {
                    $(this).removeClass('input-error');

                }
            });

        });

        $.ajax({
            url:"http://localhost:5501/my-objects",
            //data:$("#form-username").val(),
            dataType:"json",
            type:"GET",
            success:function(msg){
                if($("#newPassword").val() && $("#newPasswordAgain").val()) {
                        if ($("#newPassword").val() == $("#newPasswordAgain").val() && $("#currentPassword").val() == msg[0].password) {
                            //msg[0].password = $("#newPassword").val();
                            //toastr.error("用户名或密码错误！");
                            alert("修改成功！将为您跳转到登录页面");
                            window.location.href = "index.html";

                        }
                        else if ($("#currentPassword").val() != msg[0].password) {
                            alert("原密码输入错误！");
                        }
                        else {
                            alert("两次输入的新密码不相同！");
                        }
                }
            }
        });
        console.log("旧密码：" + $("#currentPassword").val());
        console.log("新密码：" + $("#newPassword").val());
        console.log("再次输入：" + $("#newPasswordAgain").val());
    });



    /*$("#chufa").click(function () {
        toastr.success("success");
    })*/
});