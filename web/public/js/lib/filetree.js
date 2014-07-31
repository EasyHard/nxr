define(['jquery', 'fancytree', 'underscore'], function($, fancytree, _) {
    "use strict";
    function FileTree(id) {
        this.initFancytree(id);
        return this;
    }

    _.extend(FileTree.prototype, {
        initFancytree: function(id) {
            $(id).fancytree({
                source: [
                    {title: 'test', key: '1', folder: true, lazy: true, path: 'test'}
                ],
                lazyLoad: function(event, data) {
                    var node = data.node;
                    data.result = {
                        url: '/api/getFSChildren',
                        data: {path: node.data.path}
                    };
                },
                checkbox: false
            });
        }
    });

    return FileTree;
});
