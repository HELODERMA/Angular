app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .when('/facturas', {
            templateUrl: 'facturas/facturas.html',
            // controller: 'clientesCtrl'
        })
        .when('/facturanueva', {
            templateUrl: 'facturas/nueva_factura.html',
            controller: 'facturaCtrl'
        })
        .when('/clientes/:pag', {
            templateUrl: 'clientes/clientes.html',
            controller: 'clientesCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);