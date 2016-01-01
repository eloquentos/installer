installerControllers.controller 'diskController', ['$scope', '$http', 'shared',
  ($scope, $http, shared) ->
    remote = require('remote')
    dialog = remote.require('dialog')
    blk = remote.require('linux-blockutils')
    blk.getBlockInfo {}, (err, json) ->
      if err
        dialog.showErrorBox 'An error occurred', 'Unable to list your disks'
      else
        disks = []
        $.each json, (key, disk) ->
          if disk.TYPE != 'disk'
            return
          disks.push
            id: disk.NAME
            name: disk.MODEL
          return
        $scope.disks = disks
      return
]
