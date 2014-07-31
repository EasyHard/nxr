/*global require*/
/**
 * This is a main entry point of all javascript files.
 */
require(['editor', 'backbone'], function (Editor, Backbone) {
    "use strict";
    var editor = new Editor('code');
    var PathView = Backbone.View.extend({
        el: '#path',
        events: {
            'keypress': 'invokeJumpTo'
        },
        invokeJumpTo: function (e) {
            if (e.which !== 13 || this.$el.val().trim() === "") {
                return;
            }
            editor.jumpTo({path: this.$el.val().trim()});
        }
    });
    new PathView();
});