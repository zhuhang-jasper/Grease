// ==UserScript==
// @name         TrelloLess by zhuhang
// @namespace    https://greasyfork.org/en/users/200777
// @version      1.1
// @description  Remove unwanted Trello cosmetic stuffs
// @author       zhuhang.jasper
// @match        https://*.trello.com/b/*
// @match        https://trello.com/1/boards/*
// @match        https://trello.com/b/*
// @match        https://*.trello.com/1/boards/*
// @include      /^https:\/\/.*\.trello\.com\/b\/.*$/
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

// Main Logic
function main() {
    // Hide Trello colon symbol from custom field badge
    $('span .badge-text').each(function(){$(this).html($(this).html().replace(":",""))});
}

// Script jQuery Wrapper
(function() {
    'use strict';
    addJQuery(main);
})();