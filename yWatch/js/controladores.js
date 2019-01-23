var app = angular.module('paginacionApp.controladores', []);

app.controller('observadorCtrl', ['$scope', function($scope) {


    // Mantener un ojo sobre variable u objeo
    $scope.nombre = 'Daniela';

    // Crear watcher

    $scope.$watch('nombre', function(valorNuevo, valorViejo) {
        console.log(valorNuevo, valorViejo);
    })


}]);