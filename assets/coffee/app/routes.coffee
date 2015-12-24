installer.config ['$routeProvider', ($routeProvider) ->
    $routeProvider
        .when '/',
            templateUrl: './pages/welcome.html'
            controller: 'homeController'
]
