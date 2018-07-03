// Archivo de configuracion maestro js
// Este archivo contiene las directivas o el modulo principal de angular de nuestra aplicacion

var app = angular.module('tpdApp', []);

// Contrladores:
// Manejan una parte de la pagina o una totalidad de la misma
// Este controlador manejara todo lo de los empresarios

app.controller('empresarioCtrl', function($scope) {
  // this.empresario = empresarioData;
  $scope.empre = empresarioData;
  $scope.editando = {};
  $scope.mostrarCaja = false;

  // DEFINIR UNA function
  $scope.editarEmpresario = function() {
    angular.copy($scope.empre, $scope.editando);
    $scope.mostrarCaja = true;
  };

  // FUNCION Cancelar
  $scope.guardar = function() {
    angular.copy($scope.editando, $scope.empre);
    $scope.mostrarCaja = false;


  };

  // FUNCION Guardar
  $scope.cancelar = function() {
    $scope.editando = {};
    $scope.mostrarCaja = false;

  };

});


var empresarioData = {
  nombre: "Josué Sandoval Sánchez",
  bio: "Empedernido soñador, amante de la naturaleza, programador y artista",
  edad: 23,
  foto: "img/jos.jpg"
}