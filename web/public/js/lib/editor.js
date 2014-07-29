define(['ace/ace'], function (ace) {
    var editor = ace.edit('code');
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
});