/*global require */
require(['qunit'], function (QUnit) {
    QUnit.test( "hello test", function( assert ) {
        assert.ok( 1 == "1", "Passed!" );
    });
    QUnit.load();
    QUnit.start();
});