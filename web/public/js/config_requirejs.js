/**
 * Global configuration of RequireJS.
 */
var require = {
    baseUrl: '/js/lib/',
    // list bower components and extra deps here.
    paths: {
        jquery: '/bower_components/jquery/dist/jquery',
        ace: '/extra/ace-builds/src',
        underscore: '/bower_components/underscore/underscore',
        async: '/bower_components/async/lib/async',
        qunit: '/bower_components/qunit/qunit/qunit'
    },
    // For those non-AMD scripts, shim could fix up
    shim: {
        qunit: {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
};
