// (function() {
//   var app = angular.module('viajesApp', ["ngRoute"]);
//   app.controller('mainCtrl', ['$scope','$http', function($scope,$http) {
// 		$scope.menuPrincipal ="parciales/menu.html";
//   }]);
// })();


var app = angular.module('viajesApp', ["ngRoute"]);

app.controller('mainCtrl', function($scope, $http) {

    $scope.menuPrincipal ="parciales/menu.html";

		$scope.setActive = function(opcion){

			$scope.mPoema = "";
			$scope.mChiste = "";
			$scope.mViaje = "";
			$scope.mCodigo = "";
			$scope.mDrop = "";

			$scope[opcion] = "active";

		}


});
