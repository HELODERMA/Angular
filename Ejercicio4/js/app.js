(function() {
  var app = angular.module('myApp', []);

  app.controller('listadoCtrl', ['$scope', function($scope) {

    $scope.listado = ["Daniela", "Estefania", "Rosales", "Aguinaga"];

    $scope.informeReparto = {
   informe: [
     {
          reparto: "41",
          cliente: "00425879",
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
      }
   ]
}

    $scope.repartoZona = {
      productos:[
        {
          numerodoc:"73",
          importe:"130000",
          devolvs:"1",
          devImport:"12",
          preventaid:"2897484",
          preventaNumber:"2897484",



          tatalViaje:"MX254S5D",

          product:[
            {
              id:"0asd0sa",
              checkout:"4",
              asigPedidos:"4",
              extra:"0"
            }
          ]



        }
      ]

    }

    $scope.checking = {
      datos:[
        {
          noviaje:"MX4848",
          fecha:"14/06/2018",
          auditor:"mxperex Jose Perez",
          montodev:"MX4848",
          montoped:"MX4848",
          iniciochec:"MX4848",
          fincheck:"MX4848",
          montofalta:"MX4848",
          totaldep:"MX4848",
          id:"d8asyda",
          producto:"salsa",
          carga:"4",
          entregado:"4",
          checkin:"0",
          falante:"0",
          sobrante:"0",
          devuelto:"0",
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
