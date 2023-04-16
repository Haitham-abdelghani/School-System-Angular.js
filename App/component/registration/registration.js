'use strict';


angular.module('myApp.registration',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/registration',{
        templateUrl:'component/registration/registration.html',
        controller:'registrationcontrol'

    })
}])
.controller('registrationcontrol',['$scope','$firebaseAuth','$location','$localStorage',function($scope,$firebaseAuth,$location,$localStorage){
$scope.signUp=function(){
    var username=$scope.user.email;
    var password=$scope.user.password;

    if(username && password){
        var auth=$firebaseAuth();
        auth.$createUserWithEmailAndPassword(username,password).then(function(){
            $location.path('/home')
            console.log(`user successfully created`)
        }).catch(function(error){
            console.log(error)
        })
    }
}

$scope.submitReg = function() {
    // Get data from the form
    var firstName = $scope.user.fullname;
    var email = $scope.user.email;
    var phone = $scope.user.phone;
    var address = $scope.user.address;
  
    // Create a new object with the data
    var newUser = {
      firstName: firstName,
      email: email,
      phone: phone,
      address: address
    };
  
    // Store the user data in local storage
    localStorage.setItem(email, JSON.stringify(newUser));
  
    // Clear the form
    $scope.user = {};
  };

}])