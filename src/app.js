'use strict';

var demo = angular.module('demo', ['pr.util']);

demo.controller('demoCtrl', [
	'$timeout',

function($timeout) {
  var demo = this;

  demo.nonPluralText = 'test';

  demo.clickInside = function() {
    console.log('clicked inside!');
  };

  demo.clickOutside = function() {
  	console.log('clicked outside!');
  };

  demo.shiftClick = function(message) {
  	console.log(message);
  };
}]);
