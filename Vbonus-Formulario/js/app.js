(function(){
	var app = angular.module('bonusApp', []);

	app.controller('mainCtrl', ['$scope', function($scope){

		$scope.formData = {};

		$scope.guardar_datos = function(  ){
			// if (!valido) {
			// 	return;
			// }
			console.log("Posteando");
		}

	}]);
})();
