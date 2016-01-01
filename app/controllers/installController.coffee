installerControllers.controller 'installController', ['$scope', '$http', 'shared',
  ($scope, $http, shared) ->
      console.log shared.get 'selectedDisk'
]
