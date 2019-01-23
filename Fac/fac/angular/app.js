// var app = angular.module('facturacionApp', ['ngRoute']);
// app.controller('mainCtrl', ['$scope', function($scope) {
//     console.log("hola");
// }]);

// ESTRUCTURA ENCAPSULADA

var app = angular.module('facturacionApp', [
    'ngRoute',
    'jcs-autoValidate',

    'facturacionApp.configuracion',
    'facturacionApp.mensajes',
    'facturacionApp.notificaciones',
    'facturacionApp.clientes',
    'facturacionApp.factura',
    'facturacionApp.clientesCtrl',
    'facturacionApp.dashboardCtrl',
    'facturacionApp.facturasCrtl'

]);

angular.module('facturacionApp')
    .run([
        'defaultErrorMessageResolver',
        function(defaultErrorMessageResolver) {
            // To change the root resource file path
            defaultErrorMessageResolver.setI18nFileRootPath('angular/lib');
            defaultErrorMessageResolver.setCulture('es-CO');
        }
    ]);


app.controller('mainCtrl', ['$scope', 'Configuracion', 'Mensajes', 'Notificaciones', function($scope, Configuracion, Mensajes, Notificaciones) {

    $scope.config = {};
    $scope.mensajes = Mensajes.mensajes;
    $scope.notificaciones = Notificaciones.notificaciones;

    $scope.titulo = '';
    $scope.subtitulo = '';

    $scope.usuario = {
        nombre: "Josue Sandoval"
    }

    Configuracion.cargar().then(function() {
        $scope.config = Configuracion.config;
    });


    //
    // ─── Funciones globales del scope ───────────────────────────────────────────────────────────────────────────
    //

    $scope.activar = function(menu, submenu, titulo, subtitulo) {

        $scope.titulo = titulo;
        $scope.subtitulo = subtitulo;

        $scope.mDashboard = "";
        $scope.mClientes = "";

        $scope[menu] = 'active';
    }


}]);

// ================================================
//   Directivas
// ================================================
app.directive('enterKey', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.enterKey);
                });

                event.preventDefault();
            }
        });
    };
});


//
// ─── MIS FILTROS ────────────────────────────────────────────────────────────────
//

app.filter('quitarletra', function() {
        return function(palabra) {
            if (palabra) {
                if (palabra.length > 1) {
                    return palabra.substr(1);
                } else {
                    return palabra;
                }
            }

        }
    })
    .filter('mensajeCorto', function() {
        return function(mensaje) {
            if (mensaje) {
                if (mensaje.length > 20) {
                    return mensaje.substr(0, 35) + " ...";
                } else {
                    return mensaje;
                }
            }

        }
    });