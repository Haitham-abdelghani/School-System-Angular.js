'use strict';

angular.module('myApp.home',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'component/home/home.html',
        
        controller:'homecontrol',
    })
}])

.controller('homecontrol',['$scope','$firebaseAuth','$location',function($scope,$firebaseAuth,$location){

    $scope.signIn=function(){
        var email=$scope.user.email;
        var password=$scope.user.password;
        var auth=$firebaseAuth();
        auth.$signInWithEmailAndPassword(email,password).then(function(){
            console.log("user login successful");
            console.log(email)
            $location.path('/dashboard'+email)
        }).catch(function(error){
            console.log(error)
        })
    }

    // create service 

}]).service('CommonProp',['$location','$firebaseAuth',function($location,$firebaseAuth){
    var user="";
    var auth=$firebaseAuth();
    return{
        getUser:function(){
            
            return user;
        },
        setUser:function(value){
            localStorage.setItem('userEmail',value)
            user=value;
        },
        logoutUser:function(){
            auth.$signOut().then(function(){
                console.log('logout has been successfully');
                $location.path('/home')
            })
        }


    }
}])