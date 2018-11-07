//        PRIMER ESTRUCTURA
// var app = angular.module('myApp', []);
//
// app.controller('testCtrl', function($scope) {
//
// });

(function() {
  var app = angular.module('myApp', ['ngTouch']);

  app.controller('listadoCtrl', ['$scope', function($scope) {

		$scope.borrado = "";

		$scope.mostrar_alerta = function() {
			swal("Here's the title!", "...and here's the text!");
		}

		$scope.alerta_confirmacio = function() {
			swal({
			  title: "Are you sure?",
			  text: "Once deleted, you will not be able to recover this imaginary file!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
					$scope.borrado = "Archivo borrado";
					$scope.$apply();
			    swal("Poof! Your imaginary file has been deleted!", {
			      icon: "success",
			    });
			  } else {
			    swal("Your imaginary file is safe!");
			  }
			});
		}

		$scope.alerta_confirmacio = function() {
			swal("Write something here:", {
			  content: "input",
			})
			.then((value) => {
				$scope.borrado = value;
				$scope.$apply();
			  swal(`You typed: ${value}`);
});
		}

  }]);
})();
