app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){

	$scope.setActive("mAlumnos");

	$scope.alumnos = {};


	// $http.jsonp('php/servicios/alumnos.listado.php').then(function(response) {
	// 			// $scope.myWelcome = response.data;
	// 			$scope.alumnos = response;
	// 	});

		// $http.get('php/servicios/alumnos.listado.php')
	 	//     .then(function(response) {
	 	//         // $scope.myWelcome = response.data;
	 	// 				$scope.alumnos = response.data;
	 	//     });


}]);
