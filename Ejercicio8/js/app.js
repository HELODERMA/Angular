//        PRIMER ESTRUCTURA
// var app = angular.module('myApp', []);
//
// app.controller('testCtrl', function($scope) {
//
// });

(function() {
  var app = angular.module('myApp', []);

  app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {
    $scope.geo = {};
    var query = 'http://www.geoplugin.net/json.gp?callback=JSON_CALLBACK';
    $http.jsonp('http://www.geoplugin.net/json.gp?callback=JSON_CALLBACK', {jsonpCallbackParam: 'callback'}).then(function(data){
      $scope.geo = data;
    });



  }]);
})();
