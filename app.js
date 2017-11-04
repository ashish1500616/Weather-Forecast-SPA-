//Add Module,


var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

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
//?q={city name},{country code}&cnt={cnt}
weatherApp.service('cityService', function() {
    this.city = "New Delhi,ND";
});
weatherApp.controller('mainController', ['$scope', '$log', 'cityService', function($scope, $log, cityService) {
    $scope.city = cityService.city;

}]);
weatherApp.controller('secondController', ['$scope', '$log', '$resource', 'cityService',function($scope, $log, $resource, cityService) {
    $scope.name = 'Forecast';
    $scope.city = cityService.city;
    $scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2, appid: 'ae234bf2fbf8fced58092ee511d18d09' });

    $scope.covertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function(dt) {
        return new Date(dt *1000);
    };
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

}]);