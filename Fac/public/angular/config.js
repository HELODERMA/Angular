app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .when('/clientes/:pag', {
            templateUrl: 'clientes/clientes.html',
            controller: 'clientesCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);