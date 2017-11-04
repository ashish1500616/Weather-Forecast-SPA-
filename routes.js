//Routes
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
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.htm',
            controller: 'secondController'
        })
});