var fs = require('fs'),
    path = require('path'),
    async = require('async');
exports.fileContent = {
    name: "fileContent",
    description: "Retrieve file content for client.",
    inputs: {
        required: ['path'],
        optional: []
    },
    outputExample: {
        content: 't1l1\nt1l2\n'
    },
    run: function (api, connection, next) {
        async.waterfall([
            function (cb) {
                var filepath = path.join(api.config.custom.fileroot, connection.params.path);
                filepath = path.resolve(filepath);
                api.log('requesting file content: ' + filepath, 'debug');
                fs.readFile(filepath, {encoding: 'utf8'}, cb);
            }
        ], function (err, data) {
            if (err) {
                connection.response = { error: err};
                // not a good idea always return 400. Check it later
                connection.responseHttpCode = 400;
            } else {
                connection.response = {
                    content: data
                };
            }
            next(connection, true);
        });
    }
};
