'use strict';

angular.module('pr.util', []);
'use strict';

angular.module('pr.util').directive('prStopPropagation', [

function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var ev = attrs.ppStopPropagation || 'click';

      element.on(ev, function(event){
        event.stopPropagation();
        return true;
      });
    }
  };
}]);

angular.module('pr.util').directive('prShiftClick', [

function() {
  return {
    restrict: 'A',
    scope: {
      shiftClick: '&prShiftClick'
    },
    link: function(scope, element, attrs) {
      element.on('click', function(event){
        if (event.shiftKey) {
          scope.shiftClick();
        }

        return true;
      });
    }
  };
}]);
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