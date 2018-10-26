//        PRIMER ESTRUCTURA
// var app = angular.module('myApp', []);
//
// app.controller('testCtrl', function($scope) {
//
// });

(function() {
  var app = angular.module('myApp', ['ngTouch']);

  app.controller('listadoCtrl', ['$scope', function($scope) {
		console.log("hii");
		$scope.mostrar_alerta = function() {
			swal("Here's the title!", "...and here's the text!");
		}

		$scope.alerta_peticion = function() {
			swal("Write something here:", {
      content: "input",
			})
			.then((value) => {
			  swal(`You typed: ${value}`);
			});
		}



  }]);
})();
