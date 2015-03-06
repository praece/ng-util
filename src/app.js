'use strict';

var demo = angular.module('demo', ['pr.util']);

demo.controller('demoCtrl', [
	'$timeout',

function($timeout) {
  var demo = this;

  demo.clickInside = function() {
    console.log("clicked inside!");
  };

  demo.clickOutside = function() {
  	console.log("clicked outside!");
  };
}]);
