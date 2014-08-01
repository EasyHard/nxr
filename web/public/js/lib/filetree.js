define(['jquery', 'fancytree', 'underscore'], function($, fancytree, _) {
    "use strict";
    function FileTree(id) {
        this.fancytree = $(id);
        this.initFancytree(id);
        return this;
    }

    _.extend(FileTree.prototype, {
        initFancytree: function(id) {
            this.fancytree.fancytree({
                source: [
                    {title: 'root', key: '1', folder: true, lazy: true, path: '.'}
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
        },

        bind: function(event, callback) {
            this.fancytree.bind(event, callback);
        }
    });

    return FileTree;
});
