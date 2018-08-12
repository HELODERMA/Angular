app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){

	$scope.setActive("mAlumnos");

	$scope.alumnos = {};

	$http({
			method : "GET",
			url : "php/servicios/alumnos.listado.php"
	}).then(function mySuccess(response) {
			 $scope.alumnos = response.data;
	}, function myError(response) {
			 $scope.profesores = response.statusText;
	});


}]);
