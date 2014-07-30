/*global require */
require(['mocha', 'chai'], function (mocha, chai) {
    describe('example test', function () {
        it('passed test', function (done) {
            chai.assert.ok(true, 'things should be okay');
            done();
        });
        it('failed test', function (done) {
            chai.assert.ok(false, 'not good, not good');
            done();
        });
    });

    mocha.run();
});