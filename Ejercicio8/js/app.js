//        PRIMER ESTRUCTURA
// var app = angular.module('myApp', []);
//
// app.controller('testCtrl', function($scope) {
//
// });

(function() {
  var app = angular.module('myApp', []);

  app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {

    $scope.url = "http://www.geoplugin.net/json.gp";
    $scope.geo = {};

    // ESTE JSONP NO FUNCIONO
    // $http.jsonp('http://www.geoplugin.net/json.gp?callback=JSON_CALLBACK', {jsonpCallbackParam: 'callback'}).then(function(data){
    //   $scope.geo = data;
    // });

    $http.get($scope.url).then(function(response){
      console.log(response);
      $scope.geo = response.data;

    })



  }]);
})();
