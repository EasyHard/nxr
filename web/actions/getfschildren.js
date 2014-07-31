// getFSChildren.js

var fs = require('fs'),
    async = require('async'),
    _ = require('underscore'),
    path = require('path');

// get children of nodes
exports.getFSChildren = {
    name: 'getFSChildren' ,
    description: 'get the children of the node' ,
    inputs: {
        'required': ['path'],
        'optional': []
    },
    outputExample: [{
    }],
    run: function(api, connection, next) {
        var dirpath = path.join(api.config.custom.fileroot, connection.params.path);
        async.waterfall([function(cb){
            fs.readdir(dirpath, cb);
        }, function(files, cb){
            async.map(files, function(item, cb){
                fs.lstat(path.join(dirpath, item), function(err, stats){
                    if (err) {cb(err);return;}
                    cb(null, {
                        title: item,
                        path: path.relative(api.config.custom.fileroot, path.join(dirpath, item)),
                        folder: stats.isDirectory(),
                        lazy: stats.isDirectory()
                    });
                });
            }, cb);
        }], function(err, data){
            if (err) {
                connection.response = { error: err};
                // not a good idea always return 400. Check it later
                connection.responseHttpCode = 400;
            } else {
                connection.response = data;
            }
            next(connection, true);
        });
    }
};

