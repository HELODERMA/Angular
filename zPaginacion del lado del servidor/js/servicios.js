var app = angular.module('paginacionApp.servicios', []);

app.factory('Paises', ['$http', function($http) {

    var self = {
        cargando: false,
        pagina: 1,
        total: 0,
        totalpaginas: 0,
        data: [],

        irA: function(pag) {
            self.cargarData({
                pagina: pag
            });
        },

        cargarUltima: function() {

            self.cargarData({
                pagina: self.totalpaginas
            });

        },

        cargarPrimera: function() {

            self.cargarData({
                pagina: 1
            });

        },

        cargarData: function(opc) {
            self.cargando = true;
            self.pagina = opc.pagina;

            // ** * METODO DE LA FORMA MAS SIMILAR AL DEL PROFESOR ** ** ** *
            // $http.post('php/servicios/paises.getPaises.php', opc)
            //     .then(function mySuccess(response) {
            //         console.log(response);
            //     }, function myError(response) {
            //         console.error("Malas noticias");
            //     });

            // ******** Metodo mas complejo

            $http({
                method: "POST",
                url: "php/servicios/paises.getPaises.php",
                data: opc

            }).then(function mySuccess(response) {
                self.cargando = false;
                self.totalpaginas = response.data.totalpaginas;
                console.log(self.totalpaginas);
                self.total = response.total;
                self.data = response.data;
            }, function myError(response) {
                console.error("Malas noticias");

            });


        }

    }

    var defecto = {
        pagina: 1
    };

    self.cargarData(defecto);

    return self;

}])