app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){

	$scope.setActive("mAlumnos");

	$scope.alumnos = {};
	$scope.posicion = 5;

	$http({
			method : "GET",
			url : "php/servicios/alumnos.listado.php"
	}).then(function mySuccess(response) {
			 $scope.alumnos = response.data;
	}, function myError(response) {
			 $scope.profesores = response.statusText;
	});

	$scope.siguientes = function(){
		if ( $scope.alumnos.length > $scope.posicion ) {
			$scope.posicion += 5;
		};
	}

	$scope.anteriores = function(){
		if ($scope.posicion > 5 ) {
			$scope.posicion -= 5;
		}
	}

}]);
