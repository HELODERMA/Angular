var app = angular.module('loginApp', ['login.loginService']);
app.controller('mainCtrl', ['$scope', 'LoginService', function($scope, LoginService) {

    $scope.invalido = false;
    $scope.cargando = false;
    $scope.mensaje = '';

    $scope.datos = {};

    $scope.ingresar = function(datos) {

        if (datos.usuario.length < 3) {
            $scope.invalido = true;
            $scope.mensaje = "Ingrese su Usuario";
            return;
        } else if (datos.contrasena.length < 3) {
            $scope.invalido = true;
            $scope.mensaje = "Ingrese su Contraseña";
            return;
        }

        $scope.invalido = false;
        $scope.cargando = true;

        LoginService.login(datos).then(function mySucces(data) {

            if (data.data.err) {
                $scope.invalido = true;
                $scope.cargando = false;
                $scope.mensaje = data.data.mensaje;
            } else {
                console.log(data.data.mensaje);
                window.location = data.data.url;
            }

        });
    }

}]);