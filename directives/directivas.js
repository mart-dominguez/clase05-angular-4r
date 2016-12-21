angular.module('app01')
.directive('menu', function() {
    return {
      restrict: 'EA',
      transclude: true,
      templateUrl:'templates/directivas/menu.html'
    };
})
.directive('itemMenu', function() {
    return {
      restrict: 'EA',
	      scope :{
      			texto: '<',
      			esActivo:'=',
      			fx:'&'
      		},
      		templateUrl:'templates/directivas/itemMenu.html'
    	};
	}
);