(function(){

var app = angular.module('myApp',[ ]);

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
				'http://api.openweathermap.org/data/2.5/weather?**'
    ]);
});


app.controller('mainCtrl', ['$scope','$http','$sce', function($scope,$http,$sce){

    $scope.clima = {};

		var params = {
			lat: 35,
			lon: 139,
			appid: '9f50a805aa0089a1edd1829a5db029f0'
    };

		$http.jsonp('http://api.openweathermap.org/data/2.5/weather?', { params: params })
				        .then(function(data){
								 $scope.clima = data.data;
				         console.log(data.data);
				        })
				        .catch( function(error){
				          console.warn( error );
				        })

}]);
})();
