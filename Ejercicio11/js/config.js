// CONFIGURACIONES DE ANGULAR Y PAGINACION

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'parciales/poemas.html',
						controller: 'poemasCtrl'
        })
        .when('/chistes', {
            templateUrl: 'parciales/chistes.html',
						controller: 'chistesCtrl'
        })
        .when('/actividades', {
            templateUrl: 'parciales/actividades.html',
						controller: 'actividadesCtrl'
        })
        .when('/codigo', {
            templateUrl: 'parciales/codigo.html',
						controller: 'codigoCtrl'
        })
        .when('/drop', {
					templateUrl: 'parciales/drop.html',
						controller: 'dropdownCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })

});
