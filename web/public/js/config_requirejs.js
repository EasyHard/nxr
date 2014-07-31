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
        mocha: '/bower_components/mocha/mocha',
        chai: '/bower_components/chai/chai'
    },
    // For those non-AMD scripts, shim could fix up.
    // of course you could also just include them in
    // html. I don't have any bias. Make your judgement!
    shim: {
        mocha: {
            exports: 'mocha',
            init: function () {
                mocha.setup('bdd');
            }
        }
    }
};
