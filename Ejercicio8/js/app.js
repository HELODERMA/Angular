(function(){

var app = angular.module('myApp',[ ]);


//Si comento el bloque app.config, me sale error $sce:insecurl por la petición de geoplugin
app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'http://www.geoplugin.net/json.gp?callback'
    ]);
});



app.controller('mainCtrl', ['$scope','$http','$sce', function($scope,$http,$sce){

    $scope.geo = {};
	  var url = "http://www.geoplugin.net/json.gp";
	  $http.jsonp('http://www.geoplugin.net/json.gp?callback', {jsonpCallbackParam: 'jsoncallback'})
	        .then(function(data){
					 $scope.geo = data.data;
	         console.log(data.data);
	        })
	        .catch( function(error){
	          console.warn( error );
	        })

}]);
})();
