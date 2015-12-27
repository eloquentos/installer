var installer, installerControllers;

installer = angular.module('installer', ['ngRoute', 'installerControllers', 'ladda']);

installerControllers = angular.module('installerControllers', []);

installer.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: './pages/welcome.html',
      controller: 'homeController'
    }).when('/disk', {
      templateUrl: './pages/disk.html',
      controller: 'diskController'
    });
  }
]);
