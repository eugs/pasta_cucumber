'use strict';
var exec = require('child_process').execFile;
var path = require('path');
var fs = require('fs');

var filePaths = {
	'pic': './filesToUpload/pic_downloaded.jpg',
	'txt': './filesToUpload/code_downloaded.txt',
	'video': './filesToUpload/video_downloaded.mp4',
	'invalid-pic': './filesToUpload/5mb.jpg',
	'invalid-txt': './filesToUpload/more-than-500kb.txt'
};

var save = function(fileType) {
	var pth = path.resolve(__dirname, filePaths[fileType]);

		if(fs.existsSync(pth)) {
			console.log('file ' + pth + ' already exists, will be removed...');
			fs.unlinkSync(pth);
		}

	exec('./test/support/exe/ctrl-s.exe', [pth], function(err, data) {
        // console.log(err);
        console.log(data.toString());
    });

};


module.exports = save;
