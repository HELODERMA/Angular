var app = angular.module('miApp', ["ngRoute"]);

app.controller('mainCtrl', function($scope, $http) {
		// Set Up de un NG-INCLUDE
    $scope.menuSuperior = "parciales/menu.html";

    $scope.setActive = function(Opcion) {

        $scope.mInicio = "";
        $scope.mProfesores = "";
        $scope.mAlumnos = "";

        $scope[Opcion] = "active";

    }



});


// Filtro personalizado de telefono
app.filter('telefono', function(){
	return function(numero){
		return numero.substring(0,4) + "-" + numero.substring(4);
	}
});
