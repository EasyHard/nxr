/**
 * This is a main entry point of all javascript files.
 */
require(['editor', 'filetree', 'jquery', 'jquery-ui', 'fancytree'], function (Editor, FileTree, $, ui, ft) {
    var editor = new Editor('code');
    var filetree = new FileTree('#fstree');
    filetree.bind('click', function(event) {
        var node = $.ui.fancytree.getNode(event);
        if (!node.folder) {
            editor.jumpTo({path: node.data.path});
        }
    });

});
