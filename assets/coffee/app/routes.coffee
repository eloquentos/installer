installer.config ['$routeProvider', ($routeProvider) ->
    $routeProvider
        .when '/',
            templateUrl: './pages/welcome.html'
            controller: 'homeController'

        .when '/disk',
            templateUrl: './pages/disk.html'
            controller: 'diskController'

        .when '/install',
            templateUrl: './pages/install.html'
            controller: 'installController'
]
