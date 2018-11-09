var app = angular.module('promesaApp.servicios', []);

//Si comento el bloque app.config, me sale error $sce:insecurl por la petición de geoplugin
app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['http://www.json-generator.com/api/json/get/cfqqsYxeoO']);
})

app.factory('Personas', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {

    var self = {
        "Cargando": false,
        "Mensaje": "",
        "data": []
    };

    self.cargarData = function() {
        self.Cargando = true;

        var q = $q.defer();
        console.log("Funcion llamada");

        // No funciono parte del curso

        // $http.jsonp("http://www.json-generator.com/api/json/get/cfqqsYxeoO?callback=JSON_CALLBACK")
        //     .then(function success(data) {
        //             console.log("Todo Bien");
        //             console.log(data);
        //         },
        //         function error(response) {
        //             console.log(":(");
        //         });




        $http.jsonp('http://www.json-generator.com/api/json/get/cfqqsYxeoO', { jsonpCallbackParam: 'callback' })
            .then(function sucecess(response) {

                setTimeout(function() {
                    q.resolve(response.data);
                }, 1000);

            }, function error(response) {

                q.reject("Error al cargar" + response);
                console.log(":(");

            });

        return q.promise;


    };

    // Route Scope

    $rootScope.promise = self.cargarData();
    $rootScope.promise.then(
        function(data) {
            self.Cargando = false;
            self.Mensaje = "Informacion cargada correctamente";
            self.data = data;
        },
        function(error) {
            self.Cargando = false;
            self.Mensaje = "Error al cargar data";
            console.error(error);
        }
    );

    return self;

}])