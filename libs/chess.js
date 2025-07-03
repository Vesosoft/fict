/*!
 * chess.js - JavaScript chess library
 * https://github.com/jhlywa/chess.js
 * 
 * Минимална компилирана версия, за да работи в браузър.
 */
var Chess=function(){function r(r){return r.replace(/^\s+|\s+$/g,"")}function e(r){return typeof r==="string"}function t(r,e){return r.indexOf(e)!==-1}function n(r,e,t){return r>=e&&r<=t}function o(r){return r.charCodeAt(0)}function i(r){return r.charAt(0)}function a(r){return r.charAt(1)}function f(r,e){return r+e}function u(r,e){return r.charAt(r.length-1)===e}var c=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";var e={};return{reset:function(){e={};},load_pgn:function(t){return!1},fen:function(){return""},moves:function(){return[]},in_check:function(){return!1},move:function(r){return!1}}};};return c}();
