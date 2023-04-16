'use strict';

angular.module('myApp.parent',['ngRoute','ngStorage'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/parent',{
        templateUrl:'component/parent/parent.html',
        controller:'parentcontrol'

    })
}])
.controller('parentcontrol',['$scope','$localStorage','$window',function($scope,$localStorage,$window){
    $scope.data = [];

    // Function to add data to local storage
    $scope.submitfunction = function() {
      // Get data from the form
      var firstName = $scope.user.firstname;
      var lastName = $scope.user.lastname;
      var phone = $scope.user.phone;
      var address = $scope.user.address;
  
      // Create a new object with the data
      var newData = {
        id: $scope.data.length + 1, // Add an id to the object
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address:address,
      };
  
      // Add the new data to the array
      $scope.data.push(newData);
  
      // Store the data in local storage
      $localStorage.data = $scope.data;
  
      // Clear the form
      $scope.firstName = '';
      $scope.lastName = '';
      $scope.phone = '';
      $scope.address = '';
    };
  
    // Initialize the data from local storage
    if ($localStorage.data) {
      $scope.data = $localStorage.data;
    }
   
    $scope.deleteItem = function(index) {
        $scope.data.splice(index, 1);
        $localStorage.data = $scope.data;
      }
      $scope.showForm = false;
      $scope.toggleForm = function() {
        $scope.showForm = !$scope.showForm;
      };

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
}])


/*  
   // Get a reference to the Firestore service
  var db = $firebaseFirestore.firestore();

  // Function to add data to Firestore
  $scope.submitfunction = function() {
    // Get data from the form
    var firstname = $scope.user.firstname;
    var lastname = $scope.user.lastname;
    var phone = $scope.user.phone;
    var address = $scope.user.address;

    // Create a new document with the data
    db.collection("contacts").add({
        firstname: firstname,
      lastname: lastname,
      phone: phone,
      address: address
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      // Clear the form fields
      $scope.name = "";
      $scope.email = "";
      $scope.phone = "";
      $scope.message = "";
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  };*/