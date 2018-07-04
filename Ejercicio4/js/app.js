(function() {
  var app = angular.module('myApp', []);

  app.controller('listadoCtrl', ['$scope', function($scope) {

    $scope.listado = ["Daniela", "Estefania", "Rosales", "Aguinaga"];

    $scope.informeReparto = {
      informe: [
        {
          reparto: "41",
          cliente: "009",
          nombre: "Josue Sandoval",
          direccion: "Santa fe paseo de la reforma clavijero ibero 80 cuajimalpa",
          pedidon:"SO5565656",
          Preventa: "2034M18184",
          comentario: "",
          totalcj:"0",
          un:"7",
          total:"268.56",
        producto:[
          {
            prod: "000001038SK",
            um: "UN",
            cantidad: "12",
            importe: "152"
          },
          {
            prod: "gyuguy55",
            um: "UN",
            cantidad: "5",
            importe: "854"
          }
        ]
      },
      {
        reparto: "40",
        cliente: "00425879",
        nombre: "Samanta Morse",
        direccion: "Santa fe paseo de la reforma clavijero ibero 80 cuajimalpa",
        pedidon:"19952703",
        Preventa: "2034M18184",
        comentario: "",
        totalcj:"0",
        un:"7",
        total:"268.56",
      producto:[
        {
          prod: "12783",
          um: "UN",
          cantidad: "4",
          importe: "432"
        },
        {
          prod: "hduih93",
          um: "UN",
          cantidad: "25",
          importe: "8354"
        }
      ]
    }
    ]
    }

    $scope.listadoProfesores = {
      profesores: [
        {
          nombre:"josue sandoval",
          clase:"fisica",
          edad:"20"
        },
        {
          nombre:"josue sandoval",
          clase:"fisica",
          edad:"20"
        },
        {
          nombre:"josue sandoval",
          clase:"fisica",
          edad:"20"
        }
      ]
    }

  }]);
})();
