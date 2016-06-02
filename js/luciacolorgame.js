/******************\
| Lucia Color Game |
| @author Anthony  |
| @version 1.0.1   |
| @date 2016/06/02 |
| @edit 2016/06/02 |
\******************/

var LuciaColorGame = (function() {
    'use strict';

    /**********
     * config */
    var COLOR_DIFF = 1;
    if (window.location.hash.length > 1) {
      var hash = parseInt(window.location.hash.substring(1));
      if (hash > 0) {
        COLOR_DIFF = hash;
      }
    }

    /****************
     * working vars */
    var currAns;
    var numCorrect;
    var numAttempts;

    /***********
     * objects */

    /******************
     * work functions */
    function initLuciaColorGame() {
      currAns = -1;
      numCorrect = 0;
      numAttempts = 0;

      $s('#left').addEventListener('click', function() {
        handleGuess(0); 
      });

      $s('#right').addEventListener('click', function() {
        handleGuess(1); 
      });

      $s('#stats-btn').addEventListener('click', function() {
        $s('#stats-val').innerHTML = numCorrect;
      });

      advanceRound();
    }

    function handleGuess(idx) {
      numAttempts += 1;
      $s('#stats-val').innerHTML = '??';
      $s('#count').innerHTML = numAttempts;

      if (currAns === idx) numCorrect += 1;

      advanceRound();
    }

    function advanceRound() {
      var colors = getRandomColors();
      currAns = colors[2];
      $s('#c1').style.backgroundColor = colors[0];
      $s('#c2').style.backgroundColor = colors[1];
    }

    function getRandomColors() {
      var color0 = [0, 0, 0];
      var color1 = [0, 0, 0];
      var index = Math.floor(color1.length * Math.random());
      var val = Math.floor((256 - COLOR_DIFF) * Math.random());
      color0[index] = val;
      color1[index] = val + COLOR_DIFF;

      if (Math.random() < 0.5) {
        return [color0, color1].map(getColor).concat([0]);
      } else {
        return [color1, color0].map(getColor).concat([1]);
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
