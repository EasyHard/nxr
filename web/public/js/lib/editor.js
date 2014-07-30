/**
 * Custom editor.
 */
define(['ace/ace', 'underscore'], function (ace, _) {
    function Editor(id) {
        var editor = this.editor = ace.edit(id);
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript");
        editor.getSession().setUseWrapMode(true);
        editor.setReadOnly(true);
        editor.renderer.$cursorLayer.element.style.opacity = 0;
        editor.commands.commandKeyBinding = {};
        return this;
    }

    _.extend(Editor.prototype, {
        setCode: function (code) {
            this.editor.setValue(code);
        },
        getCode: function (code) {
            return this.editor.getValue();
        }
    });

    // return a constructor of custom ace editor
    return Editor;
});
