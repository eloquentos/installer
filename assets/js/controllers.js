installerControllers.controller('diskController', [
  '$scope', '$http', function($scope, $http) {
    var blk, dialog, remote;
    remote = require('remote');
    dialog = remote.require('dialog');
    blk = remote.require('linux-blockutils');
    return blk.getBlockInfo({}, function(err, json) {
      var disks;
      if (err) {
        dialog.showErrorBox('An error occurred', 'Unable to list your disks');
      } else {
        disks = [];
        $.each(json, function(key, disk) {
          if (disk.TYPE !== 'disk') {
            return;
          }
          disks.push({
            id: disk.NAME,
            name: disk.MODEL
          });
        });
        $scope.disks = disks;
      }
    });
  }
]);

installerControllers.controller('homeController', [
  '$scope', '$http', function($scope, $http) {
    return $scope.diskUtil = function() {
      return require('child_process').spawn('gnome-disks');
    };
  }
]);
