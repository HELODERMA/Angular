var app = angular.module('facturacionApp.clientesCtrl', []);

app.controller('clientesCtrl', ['$scope', '$routeParams', 'Clientes', function($scope, $routeParams, Clientes) {

    var pag = $routeParams.pag;

    $scope.activar('mClientes', '', 'Clientes', 'listado');
    $scope.clientes = {}
    $scope.clienteSel = {}

    $scope.moverA = function(pag) {
        Clientes.cargarPagina(pag).then(function() {
            $scope.clientes = Clientes;
        });
    };

    $scope.moverA(pag);

    //
    // ─── MODAL DE EDICION ───────────────────────────────────────────────────────────
    //

    $scope.mostrarModal = function(cliente) {
        angular.copy(cliente, $scope.clienteSel);
        $("#modal-cliente").modal();
        // return true;
    }

    //
    // ─── FUNCION PARA GUARDAR CLIENTE ───────────────────────────────────────────────
    //

    $scope.guardar = function(cliente, frmCliente) {

        Clientes.guardar(cliente).then(function() {
            // Codigo cuando se actualizo
            $("#modal-cliente").modal('hide');
            $scope.clienteSel = {};
            frmCliente.autoValidateFormOptions.resetForm();
        });

    }

}]);