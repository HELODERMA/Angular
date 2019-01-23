var app = angular.module('facturacionApp.mensajes', []);

app.factory('Mensajes', ['$http', '$q', function($http, $q) {

    var self = {

        mensajes: [{
                img: 'dist/img/user2-160x160.jpg',
                nombre: 'Daniela',
                mensaje: 'Bienvenido a nuestro servicio de espionaje profecional para ejentes secretos',
                fecha: '21-Noviembre'
            },
            {
                img: 'dist/img/user2-160x160.jpg',
                nombre: 'Maria Soto',
                mensaje: 'Bienvenido a nuestro servicio de espionaje profecional para ejentes secretos',
                fecha: '20-Noviembre'
            },
            {
                img: 'dist/img/user2-160x160.jpg',
                nombre: 'Sofia',
                mensaje: 'Bienvenido a nuestro servicio de espionaje profecional para ejentes secretos',
                fecha: '18-Noviembre'
            }
        ]

    };

    return self;
}]);