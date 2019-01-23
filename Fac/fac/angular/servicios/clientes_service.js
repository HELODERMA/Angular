var app = angular.module('facturacionApp.clientes', []);

app.factory('Clientes', ['$http', '$q', function($http, $q) {

    var self = {

        'cargando': false,
        'err': false,
        'conteo': 0,
        'clientes': [],
        'pag_actual': 1,
        'pag_siguiente': 1,
        'pag_anterior': 1,
        'total_paginas': 1,
        'paginas': [],

        buscar: function(parametro) {

            var d = $q.defer();

            self.cargando = true;
            // AMBOS SON BUENOS
            // let url = `php/clientes/get.cliente.buscar.php?p=${parametro}`;

            $http({
                method: "POST",
                url: 'php/clientes/get.cliente.buscar.php?p=',
                params: {
                    parametro
                }
            }).then(function mySucces(response) {
                // console.log(response.data);
                self.cargando = false;
                self.clientes = response.data.clientes;
                d.resolve();
            }, function myError(response) {
                console.log(response);
            });

            return d.promise;

        },


        guardar: function(cliente) {
            var d = $q.defer();

            $http({
                method: "POST",
                url: 'php/clientes/post.clienteguardar.php',
                params: {
                    cliente
                }

            }).then(function mySucces(response) {

                self.cargarPagina(self.pag_actual);

                return d.resolve();

            }, function myError(response) {
                console.error(response);
            });


            return d.promise;
        },

        cargarPagina: function(pag) {

            var d = $q.defer();

            $http({
                method: "GET",
                url: 'php/clientes/get.clientes.php?pag=' + pag
            }).then(function mySucces(response) {

                self.err = response.data.err;
                self.conteo = response.data.conteo;
                self.clientes = response.data.clientes;
                self.pag_actual = response.data.pag_actual;
                self.pag_siguiente = response.data.pag_siguiente;
                self.pag_anterior = response.data.pag_anterior;
                self.total_paginas = response.data.total_paginas;
                self.paginas = response.data.paginas;

                return d.resolve();

            }, function myError(response) {
                console.error(response);
            });

            return d.promise;

        }

    };

    return self;

}]);