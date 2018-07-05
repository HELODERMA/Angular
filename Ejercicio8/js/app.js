       // PRIMER ESTRUCTURA
var app = angular.module('myApp', []);

app.controller('mainCtrl', function['$scope','$http', function($scope,$http) {

  $scope.geo = {};

  // var url = "http://www.geoplugin.net/json.gp" + "?callback=JSON_CALLBACK";

  $http.jsonp('http://www.geoplugin.net/json.gp?callback=JSON_CALLBACK')
    .success(function(data){
       console.log('success');
    })
    .error(function () {
      console.log('error')
    });





});
