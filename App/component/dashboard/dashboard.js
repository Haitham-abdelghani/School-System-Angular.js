'use strict';

angular.module('myApp.dashboard',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/dashboard:email',{
        templateUrl:'component/dashboard/dashboard.html',
        controller:'dashboardcontrol'

    })
}])
.controller('dashboardcontrol',['$scope','$localStorage','$routeParams','CommonProp',function($scope,$localStorage,$routeParams,$CommonProp){
 // Get the user's email from the route parameters
 var userEmail = $routeParams.email;
        
 // Get the user data from local storage using their email as the key
 var userData = JSON.parse(localStorage.getItem(userEmail));

 // Assign the user data to a variable for use in the template
 $scope.user = userData;


 $scope.toggleMenu = function() {
    var orderlist = angular.element(document.getElementById('openia'));
    
    if (orderlist.hasClass('openMenu')) {
        orderlist.removeClass('openMenu');
    } else {
      orderlist.addClass('openMenu');
    }
  };
  $scope.toggleMenuclose=function(){
    var orderlist = angular.element(document.getElementById('openia'));
    if(orderlist.hasClass('openMenu')){
        orderlist.removeClass('openMenu');
    }
  }

  $scope.logout=function(){
    $CommonProp.logoutUser();
  }

}])