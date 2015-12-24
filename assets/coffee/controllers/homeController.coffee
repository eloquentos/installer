installerControllers.controller 'homeController', ['$scope', '$http',
  ($scope, $http) ->
      $scope.diskUtil = ->
          require 'child_process'
              .spawn 'gnome-disks'
]
