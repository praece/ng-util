'use strict';

angular.module('pr.util').filter('prPluralize', [

function() {
	return function(text, count) {
		count = count || null;

		if (text) {
			text = pluralize(text, count);
	  }

    return text;
	};
}]);