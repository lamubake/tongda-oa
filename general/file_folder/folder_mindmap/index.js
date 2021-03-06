/**
 * shape 
 */
define(function(require, exports, module) {

    var Stage       = require('../../../static/js/jsmind/js/jsMind/stage');
    var MindNode    = require('../../../static/js/jsmind/js/jsMind/core/mindNode');
    var TreeLayout  = require('../../../static/js/jsmind/js/jsMind/core/treeLayout');
    var $           = require('jQuery');
    var JSON        = require('JSON');

    var addChildsToNode = function(node , childsNum) {

        for (var i = 0; i < childsNum; i++) {
             var child = new MindNode(null , {
                title : '测试节点'
             });
             node.addChild(child);
        }
        return node;
    };

    var autoResize = function(stage) {
        $(window).bind('resize' , function() {
            var width = $(window).width();
            var height = $(window).height();
            stage.setSize( width , height );
        });
    };


    return {
        init : function(jsonstr) {

            var stage = new Stage({
                elem   : '#stage'
            });
            var map = stage.getMap();
            autoResize(stage);
            window.map = map;
            map.importFromJson(jsonstr);
        }
    }
});