angular.module('userApp', [])
.controller('UserController', function(){
    var userInfo = this;

    userInfo.add = function(){
        $.ajax({
            type: "POST",
            url: "/api/users",
            data:{
                email: userInfo.email,
                password: userInfo.password
            }
        })
        .done(function(user){
            if (user && user.email){
                console.log("user logged in")
                window.location.href = "/app.html?email="+user.email;
            }
            else {
                console.log("failed to create account")
                alert("failed to create user account!")
            }
        })
        .fail(function(error){
            console.log(error);
            console.log("failed to create account")
            alert("failed to create user account!")
        })
    };
    userInfo.login = function(){
        $.ajax({
            type: "POST",
            url: "/api/login",
            data:{
                email: userInfo.email,
                password: userInfo.password
            }
        })
        .done(function(user){
            if (user && user.email){
                console.log("user logged in")
                window.location.href = "/app.html?email="+user.email;
            }
           
        })
        .fail(function(error){
            console.log(error);
        })
    };
});