var app = angular.module('promesaApp.controladores',[]);

app.controller('mainCtrl', ['$scope', '$q', function($scope, $q){

	$scope.miVar = 0;

	// setInterval(function(){
	// 	$scope.miVar ++;
	// 	// SE utiliza para procesos asincronos
	// 	$scope.$apply();
	// 	console.log("Sumando...");
	// },1000);

	// Crearemos nuestra funcion compleja asincrona que haga lo del codigo de arriba

	$scope.sumar = function( num ) {

		var q = $q.defer();
		var valido = true;

		if (valido) {
			q.resolve(num + 1);
		}else {
			q.reject('No es un numero');
		}

		return q.promise;

	}

	$scope.promise = $scope.sumar(1);
	$scope.promise.then(
		function(valor){
			console.log("Promesa cumplida");
			$scope.miVar = valor;
	},
	function(error){
		console.error(error);
	});



}]);
