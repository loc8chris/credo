angular.module('userApp', [])
.controller('UserController', function(){
    var userInfo = this;

    userInfo.add = function(){
        $.ajax({
            type: "POST",
            url: "/api/users",
            data:{
                userId: userInfo.userId,
                email: userInfo.email,
                password: userInfo.password
            }
        })
        .done(function(user){
            alert("Account was created")
        })
        .fail(function(error){
            console.log(error);
        })
    };
    userInfo.login = function(){
        $.ajax({
            type: "POST",
            url: "/api/login",
            data:{
                userId: userInfo.userId,
                email: userInfo.email,
                password: userInfo.password
            }
        })
        .done(function(user){
            console.log("user logged in")
        })
        .fail(function(error){
            console.log(error);
        })
    };
});