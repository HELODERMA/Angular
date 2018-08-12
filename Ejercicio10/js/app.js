var app = angular.module('miApp', ["ngRoute"]);
app.controller('mainCtrl', function($scope, $http) {

    $scope.menuSuperior = "parciales/menu.html";

    $scope.setActive = function(Opcion) {

        $scope.mInicio = "";
        $scope.mProfesores = "";
        $scope.mAlumnos = "";

        $scope[Opcion] = "active";

    }



});



// var app = angular.module('miApp',['ngRoute']);
// // angular.module('app', ['ngRoute']);


// app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

//     $scope.menusuperior = "parciales/menu.html";
//     $scope.saludo = "Hola a todos";


// }]);
