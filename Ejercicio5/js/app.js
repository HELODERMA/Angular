//        PRIMER ESTRUCTURA
// var app = angular.module('myApp', []);
//
// app.controller('testCtrl', function($scope) {
//
// });

(function() {
  var app = angular.module('myApp', []);

  app.controller('listadoCtrl', ['$scope', function($scope) {

    $scope.paises = [
      {id:"CRI", nombre:"Costa Rica"},
      {id:"HRV", nombre:"Croacia"},
      {id:"CUB", nombre:"Cuba"},
      {id:"DMA", nombre:"Dinamarca"},
      {id:"DOM", nombre:"Republica Dominicana"},
    ];

    $scope.paisSeleccionado = "DOM";

  }]);
})();
