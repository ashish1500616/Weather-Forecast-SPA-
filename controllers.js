weatherApp.controller('mainController', ['$scope', '$log', 'cityService', function($scope, $log, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('secondController', ['$scope', '$log', '$resource','$routeParams' ,'cityService', function($scope, $log, $resource, $routeParams , cityService) {
    $scope.name = 'Forecast';
    $scope.city = cityService.city;
    $scope.days =$routeParams.days || 6;
    $scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, appid: 'ae234bf2fbf8fced58092ee511d18d09' });

    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    };


}]);
