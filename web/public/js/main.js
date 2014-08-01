/**
 * This is a main entry point of all javascript files.
 */
require(['editor', 'filetree'], function (Editor, FileTree) {
    var editor = new Editor('code');
    var filetree = new FileTree('#fstree', editor);
});
