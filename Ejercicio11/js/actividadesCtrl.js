app.controller('actividadesCtrl', ['$scope','$http', function($scope,$http){

	$scope.setActive('mViaje');

	$scope.actividadesRealizadas = {};
	$scope.actividadesFuturas = {};

	$http({
			method : "GET",
			url : "php/servicios/actividadesdone.listado.php"
	}).then(function mySuccess(response) {
			 $scope.actividadesRealizadas = response.data;
	}, function myError(response) {
		console.log('No funciona');
	});

	$http({
		method: 'GET',
		url: 'php/servicios/actividadesfuturas.listado.php'
	}).then(function mySeccess(response){
		$scope.actividadesFuturas = response.data;
	}, function myError(response){
		console.log(response);
	});


}]);
