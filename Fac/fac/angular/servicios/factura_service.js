var app = angular.module('facturacionApp.factura', []);


app.factory('Factura', ['$http', '$q', function($http, $q) {

    var self = {

        numero_factura: undefined,
        fecha_solicitado: new Date(),
        estado: 'E',
        monto: 0,
        monto_neto: 0,
        impuesto: 0,
        ISV: 0,
        comentario: undefined,
        cliente_id: undefined,
        comentario: undefined,
        detalle: [],

        nueva_factura: function() {

            self.numero_factura = undefined;
            self.fecha_solicitado = new Date();
            self.estado = 'E';
            self.comentario = undefined;
            self.cliente_id = undefined;
            self.detalle = [];

        },

        recalcular: function() {

            // Calcular los montos
            self.monto = 0;

            for (item of self.detalle) {
                self.monto += item.precio_venta * item.cantidad;
            }

            self.impuesto = self.monto * self.ISV;
            self.monto_neto = self.monto + self.impuesto;

        },

        agregar_detalle: function(agregar) {

            self.detalle.push(agregar);

            self.recalcular();

        },

        buscar_producto: function(id) {

            var d = $q.defer();

            $http({
                method: "GET",
                url: 'php/productos/get.producto.php?id=',
                params: {
                    id
                }
            }).then(function mySucces(response) {
                let respuesta = response.data;
                respuesta.producto.cantidad = 1;
                d.resolve(respuesta.producto);
            }, function myError(response) {
                console.log(response);
            });

            return d.promise;
        },

        borrar_detalle: function(item) {

            var index = self.detalle.indexOf(item);
            self.detalle.splice(index, 1);

            self.recalcular();
        },

        guardar_factura: function() {

            console.log(self);

            $http({
                method: "POST",
                url: 'php/facturas/post.guardarfactura.php',
                params: {
                    self
                }
            }).then(function mySucces(response) {
                console.log(response.data);
            }, function myError(response) {
                console.log(response);
            });

            return true;

        }
    };

    return self;

}]);