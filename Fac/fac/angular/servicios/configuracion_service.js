var app = angular.module('facturacionApp.configuracion', []);

app.factory('Configuracion', ['$http', '$q', function($http, $q) {

    var self = {

        config: {},
        cargar: function() {

            var d = $q.defer();

            $http({
                method: 'GET',
                url: 'configuracion.json',
            }).then(function Succes(response) {
                self.config = response.data;
                d.resolve();
            }, function Error(response) {
                console.log(response);
                d.reject();
            });



            return d.promise;

        }

    };

    return self;
}]);