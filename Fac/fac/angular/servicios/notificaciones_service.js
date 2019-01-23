var app = angular.module('facturacionApp.notificaciones', []);

app.factory('Notificaciones', ['$http', '$q', function($http, $q) {

    var self = {

        notificaciones: [{
                icono: "fa-user",
                notificacion: "Nuevo usuario agregado"
            },
            {
                icono: "fa-save",
                notificacion: "Nuevo usuario agregado"
            },
            {
                icono: "fa-user",
                notificacion: "Nuevo usuario dasdsad adsdsadas dagregado"
            }
        ]

    };

    return self;

}]);