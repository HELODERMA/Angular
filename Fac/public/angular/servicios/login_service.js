var app = angular.module('login.loginService', []);

app.factory('LoginService', ['$http', '$q', function($http, $q) {

    var self = {

        login: function(datos) {
            var d = $q.defer();

            $http({
                method: "POST",
                url: 'php/login/post.verificar.php',
                params: {
                    datos
                }
            }).then(function mySucces(response) {
                return d.resolve(response);
            }, function myError(response) {
                console.log(response);
            });
            return d.promise;
        }
    };

    return self;

}]);