app.controller('alumnoCtrl', ['$scope','$routeParams','$http', function($scope,$routeParams,$http){

	$scope.setActive("mAlumnos");
	$scope.actualizado = false;
	var codigo = $routeParams.codigo;
	$scope.creando = false;
	$scope.alumno = {};

	if (codigo == "nuevo") {
		$scope.creando = true;
	}else{
		$http({
				method : "GET",
				url : "php/servicios/alumnos.getAlumno.php?c=" + codigo
		}).then(function mySuccess(response) {
			if (response.data.err !== undefined) {
				window.location = "#!/alumnos";
				return;
			}
				 $scope.alumno = response.data;
		}, function myError(response) {
			console.log("Error". response);
		});
	}


	$scope.guardarAlumno = function(){

		if ($scope.creando) {
			$http.post("php/servicios/alumnos.crear.php", $scope.alumno)
	    .then(function(response) {
				// console.log(response.data);
				if (response.data.err == false) {
					$scope.actualizado = true;

					setTimeout(function() {
						$scope.actualizado = false;
						// Esta instruccion es asincrono que no es de angular, a destiempo
						$scope.$apply();
					},3000);

				};
	    });
		}else {
			$http.post("php/servicios/alumnos.guardar.php", $scope.alumno)
	    .then(function(response) {
				// console.log(response.data);
				if (response.data.err == false) {
					$scope.actualizado = true;

					setTimeout(function() {
						$scope.actualizado = false;
						// Esta instruccion es asincrono que no es de angular, a destiempo
						$scope.$apply();
					},3000);

				};
	    });
		}


	}



}]);
