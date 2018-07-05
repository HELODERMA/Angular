//        PRIMER ESTRUCTURA
// var app = angular.module('myApp', []);
//
// app.controller('testCtrl', function($scope) {
//
// });

(function() {
  var app = angular.module('myApp', []);

  app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {

    $scope.profesores = {};
    $scope.tblProfesores = 'parciales/table.html';

    $http.get('json/profesores.json').then(function(response){
      // ESTE CODIGO SE EJECUTA CUNADO LA PETICION ES CORRECTA
      $scope.profesores = response.data;
    });



  }]);
})();
