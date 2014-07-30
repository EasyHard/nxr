/*global require */
require(['mocha', 'editor', 'underscore', 'chai'], function (mocha, Editor, _, chai) {
    var editor = new Editor('editor'),
        assert = chai.assert;
    describe("jumpToLine", function () {
        before(function (done) {
            editor.setCode('line1\nline2\nline3\nline4\nline5\nline6\nline7\nline8\n9\n10');
            done();
        });

        it('jumpToLine 5', function (done) {
            editor.jumpToLine(5);
            assert.equal(editor.getCursorRow(), 5, 'should jump to line5');
            done();
        });

        it('jumpToLine 1', function (done) {
            editor.jumpToLine(1);
            assert.equal(editor.getCursorRow(), 1, 'should jump to line1');
            done();
        });
    });

    describe("jumpTo", function () {
        before(function (done) {
            editor.setCode('line1\nline2\nline3\nline4\nline5\nline6\nline7\nline8\n9\n10');
            done();
        });

        it('param.line=5', function (done) {
            editor.jumpTo({line:5}, function (err) {
                if (err) {
                    done(err);
                    return;
                }
                assert.equal(editor.getCursorRow(), 5, 'should jump to line5');
                done();
            });
        });

        it('param.path=/test/test1', function (done) {
            editor.jumpTo({path:'/test/test1'}, function (err) {
                if (err) {
                    done(err);
                    return;
                }
                assert.equal(editor.getCode(),
                    't1l1\nt1l2\nt1l3\nt1l4\nt1l5\nt1l6\nt1l7\n',
                    'code should be updated');
                done();
            });
        });

        it('path and line', function (done) {
            editor.setCode('');
            editor.jumpTo({path:'/test/test1', line:5}, function (err) {
                if (err) {
                    done(err);
                    return;
                }
                assert.equal(editor.getCode(),
                    't1l1\nt1l2\nt1l3\nt1l4\nt1l5\nt1l6\nt1l7\n',
                             'code should be updated');
                assert.equal(editor.getCursorRow(), 5, 'should jump to line 5');
                done();
            });
        });
    });
    mocha.run();
});