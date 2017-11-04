//Add Module,


var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

weatherApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'mainController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.htm',
            controller: 'secondController'
        })
});

weatherApp.service('cityService',function(){
    this.city="New Delhi,ND";
});
weatherApp.controller('mainController', ['$scope', '$log','cityService', function($scope, $log,cityService) {
    $scope.name = 'Home';
    $scope.city=cityService.city;
    $scope.$watch('city',function(){
        cityService.city=$scope.city;
    })
}]);
weatherApp.controller('secondController', ['$scope', '$log','cityService', function($scope, $log,cityService) {
    $scope.name = 'Forecast';
    $scope.city=cityService.city;
}]);
 
