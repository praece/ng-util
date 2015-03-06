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