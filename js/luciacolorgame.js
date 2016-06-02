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
    var COLOR_DIFF = 100;

    /****************
     * working vars */
    var canvas, ctx;
    var currAns;
    var numCorrect;
    var numAttempts;

    /***********
     * objects */

    /******************
     * work functions */
    function initLuciaColorGame() {
      numCorrect = 0;
      numAttempts = 0;
      advanceRound();
    }

    function advanceRound() {
      var colors = getRandomColors();
      currAns = colors[2];
      $s('#c1').style.backgroundColor = colors[0];
      $s('#c2').style.backgroundColor = colors[1];
    }

    function getRandomColors() {
      var color1 = [0, 0, 0];
      var color2 = [0, 0, 0];
      var index = Math.floor(color1.length * Math.random());
      var val = Math.floor((256 - COLOR_DIFF) * Math.random());
      color1[index] = val;
      color2[index] = val + COLOR_DIFF;

      if (Math.random() < 0.5) {
        return [color1, color2].map(getColor);
      } else {
        return [color2, color1].map(getColor);
      }
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
