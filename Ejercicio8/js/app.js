// MI FUNCION MAESRA

(function() {
	
  var app = angular.module('myApp', []);

	app.controller('mainCtrl', ['$scope','$http','$sce', function($scope,$http,$sce){

	  var url = "http://www.geoplugin.net/json.gp";
	  $http.jsonp( $sce.trustAsResourceUrl(url) )
	        .then(function(data){
	          console.log(data);
	        })
	        .catch( function(error){
	          console.warn( error );
	        })

  }]);
})();

// FUNCION DE SHAI

// var app = angular.module('myApp', []);
//
// app.controller('mainCtrl', ['$scope','$http','$sce', function($scope,$http,$sce) {
//   $scope.name = 'World';
//   $scope.url = "http://www.geoplugin.net/json.gp";
//
//   $scope.trustSrc = function(src) {
//     return $sce.trustAsResourceUrl(src);
//   }
//
//   $scope.trustedUrl = $scope.trustSrc($scope.url);
//
//   $http.get($scope.url).then(function(response){
//         console.log(response);
//         $scope.geo = response.data;
//
//       })
// }]);
