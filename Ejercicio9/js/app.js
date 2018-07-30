(function(){

var app = angular.module('myApp',[ ]);


//Si comento el bloque app.config, me sale error $sce:insecurl por la petición de geoplugin
// app.config(function($sceDelegateProvider) {
//     $sceDelegateProvider.resourceUrlWhitelist([
// 				'self',
//         'http://www.geoplugin.net/**'
//     ]);
// });

app.config(function ($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist(['http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0']);
})



app.controller('mainCtrl', ['$scope','$http','$sce', function($scope,$http,$sce){

    // $scope.geo = {};
	  // let a = $http.jsonp('http://api.openweathermap.org/', {jsonpCallbackParam: 'data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0'})
	  //       .then(function(data){
	  //        console.log(data.data);
	  //       })
	  //       .catch( function(error){
	  //         console.warn( error );
	  //       })

					$http.jsonp('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&&appid=9f50a805aa0089a1edd1829a5db029f0')
				 .then(function sucecess(data) {
				 console.log("Todo bien.");
				 console.log(data);
				 }, function error(response) {
				 console.log("Todo mal.");
				 console.log(response);
				 })

}]);
})();
