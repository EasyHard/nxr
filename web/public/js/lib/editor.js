/*global define*/
/**
 * Custom editor.
 */
define(['ace/ace', 'underscore', 'async', 'jquery'], function (ace, _, async, $) {
    "use strict";
    function Editor(id) {
        var editor = this.editor = ace.edit(id);
        editor.setTheme("ace/theme/chrome");
        editor.getSession().setMode("ace/mode/javascript");
        editor.getSession().setUseWrapMode(true);
        editor.setReadOnly(true);
        editor.renderer.$cursorLayer.element.style.opacity = 0;
        editor.commands.commandKeyBinding = {};
        editor.setHighlightActiveLine(true);
        return this;
    }

    _.extend(Editor.prototype, {
        setCode: function (code) {
            this.editor.setValue(code);
        },
        getCode: function () {
            return this.editor.getValue();
        },
        /**
         * Jump to specified path/line, `param` is an object
         * contained parameters.
         *
         * param.path If param.path is defined, will try to load new content
         * from server, and display in the editor area. Otherwise,
         * jumping happends within the current content.
         *
         * param.line If param.line is defined, will try to jump to `param.line`-th
         * row.
         *
         */
        jumpTo: function (param, cb) {
            var that = this;
            async.series([
                function (cbx) {
                    if (!param.path) {
                        return cbx();
                    }
                    // maybe need AngularJS service here
                    $.ajax('/api/filecontent', {
                        data: _.pick(param, ['path']),
                        dataType: 'json',
                        success: function (data) {
                            that.setCode(data.content);
                            cbx();
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            cbx(new Error('status: ' + textStatus + ", " + errorThrown));
                        }
                    });
                },
                function (cbx) {
                    if (!param.line) {
                        return cbx();
                    }
                    cbx(that.jumpToLine(param.line));
                }
            ], cb);
        },
        jumpToLine: function (line) {
            // third argument indicates animate scrolling or not.
            // maybe need to check it later.
            return this.editor.gotoLine(line, 0, false);
        },
        getCursorRow: function () {
            return this.editor.getCursorPosition().row + 1;
        }
    });

    // return a constructor of custom ace editor
    return Editor;
});
