$(function() {
    const remote = require('remote');
    const dialog = remote.require('dialog');
    const blk = remote.require('linux-blockutils');

    blk.getBlockInfo({}, function(err,json) {
      if (err) {
          dialog.showErrorBox('An error occurred', 'Unable to list your disks');
      } else {
         $.each(json, function(key, disk) {
             if (disk.TYPE !== 'disk') return;

             $('#select-disk').append($('<option />').val(disk.NAME).text(disk.MODEL));
         });
      }
    });

    $('#disk-util').click(function() {
        remote.getCurrentWindow().hide();

        var spawn = require('child_process').spawn;
        var diskUtility = spawn('gnome-disks');

        diskUtility.on('exit', function() {
            remote.getCurrentWindow().show();
        })
    });
})
