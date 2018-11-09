(function(){
	var app = angular.module('bonusApp', [ 'jcs-autoValidate' ]);

	angular.module('bonusApp')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
        // otherwise the current default culture is returned.
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          errorMessages['edadMinima'] = 'La edad minima es de {0}';
          errorMessages['edadMax'] = 'La edad maxima es de {0}';
        });
    }
]);


	app.controller('mainCtrl', ['$scope', function($scope){

		$scope.formData = {};

		$scope.guardar_datos = function(){
			console.log("Posteando");
		}

	}]);
})();
