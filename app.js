angular.module('app01',['ngRoute','app01LocStoService'])
.config(function ($routeProvider,$locationProvider) {
    $routeProvider
    .when('/tarea', {
    	templateUrl: 'vistas/altaTarea.html',
        controller: 'TareaController'
    })
    .when('/tarea/:tareaId', {
        templateUrl: 'vistas/altaTarea.html',
        controller: 'TareaController'
    })
    .when('/lista', {
    	templateUrl: 'vistas/listaTarea.html',
        controller: 'ListaTareaController'
    }).otherwise({
        redirectTo: "/tarea"
    });
    $locationProvider.html5Mode(true);
}).component('counter', {
  bindings: { count: '='  },
  controller: function () {
    function increment() {
      this.count++;
    }
    function decrement() {
      this.count--;
    }
    this.increment = increment;
    this.decrement = decrement;
  },
template: [
    '<div class="todo">',
      '<input type="text" ng-model="$ctrl.count">',
      '<button type="button" ng-click="$ctrl.decrement();">-</button>',
      '<button type="button" ng-click="$ctrl.increment();">+</button>',
    '</div>'
  ].join('')
});
