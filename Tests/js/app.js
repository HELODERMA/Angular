// Archivo de configuracion maestro js
// Este archivo contiene las directivas o el modulo principal de angular de nuestra aplicacion

var app = angular.module('myApp', []);

// Contrladores:
// Manejan una parte de la pagina o una totalidad de la misma
// Este controlador manejara todo lo de los empresarios

app.controller('testCtrl', function($scope) {

  $scope.preguntas=[{
       pregunta:"¿Qué etiquetas son más populares en SOes?",
       respuestas:["Java", "PHP", "JavaScript", "Android"]
   }];

});
