/******************\
| Lucia Color Game |
| @author Anthony  |
| @version 0.1     |
| @date 2016/06/02 |
| @edit 2016/06/02 |
\******************/

var LuciaColorGame = (function() {
    'use strict';

    /**********
     * config */

    /****************
     * working vars */
    var canvas, ctx;

    /***********
     * objects */

    /******************
     * work functions */
    function initLuciaColorGame() {
      var color = [201, 50, 63];
      var colorStr = getColor(color);
      $s('#c1').style.backgroundColor = colorStr;
      $s('#c2').style.backgroundColor = colorStr;
    }

    /********************
     * helper functions */
    function getColor(arr) {
      return 'rgba('+arr[0]+','+arr[1]+','+arr[2]+',1)';
    }

    function $s(id) { //for convenience
      if (id.charAt(0) !== '#') return false;
      return document.getElementById(id.substring(1));
    }

    return {
      init: initLuciaColorGame 
    };
})();

window.addEventListener('load', LuciaColorGame.init);
