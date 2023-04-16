'use strict';

angular.module('myApp',['ngRoute','myApp.home','myApp.registration','myApp.dashboard','myApp.parent'])



.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){
   
    $routeProvider.otherwise({redirectTo:'/home'})
}])