//        PRIMER ESTRUCTURA
// var app = angular.module('myApp', []);
//
// app.controller('testCtrl', function($scope) {
//
// });


// ESTRUCTURA ENCAPSULADA
(function() {
  var app = angular.module('myApp', []);

// SE CONOCEN COMO INYECCIONES EL HTTP
  app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {

    $scope.profesores = {};


    // *****METODO DE LA FORMA MAS SIMILAR AL DEL PROFESOR********
    // $http.get('json/profesores.json').then(function(response){
    //   // ESTE CODIGO SE EJECUTA CUNADO LA PETICION ES CORRECTA
    //   $scope.profesores = response.data;
    // });

    // ******** Metodo mas complejo

    $http({
        method : "GET",
        url : "json/profesores.json"
    }).then(function mySuccess(response) {
         $scope.profesores = response.data;
    }, function myError(response) {
         $scope.profesores = response.statusText;
    });

  }]);
})();
