// ==UserScript==
// @name         Trello Customized
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simplify UI, remove unwanted stuff.
// @author       zhuhang.jasper
// @match        https://trello.com/b/oZIQNihe/dev-plus
// @grant        none
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//code.jquery.com/jquery-1.12.4.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() {
    // Hide Trello colon symbol from custom field badge
    $('span .badge-text').each(function(){$(this).html($(this).html().replace(":",""))});
}

(function() {
    'use strict';
    addJQuery(main);
})();