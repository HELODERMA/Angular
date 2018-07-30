var app = angular.module('myApp', ['ngSanitize']);

app.controller('mainCtrl', function($scope,$sce) {
  $scope.name = 'World';
  $scope.url = "http://www.geoplugin.net/json.gp";

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  $scope.trustedUrl = $scope.trustSrc($scope.url);

  console.log($scope.trustedUrl);
});
