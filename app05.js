angular.module('app01',['ui.router','oc.lazyLoad','ui.bootstrap','app01LocStoService'])
.config(function($stateProvider) {
 var estadoInicial= {
    name: 'home',
    url: '/inicio',
    template: '<h1>Estado Inicial!</h1>'
  }
  var listaTarea = {
    name: 'listaTarea',
    url: '/listaTarea',
    templateUrl: 'vistas/listaTarea.html',
    controller: 'ListaTareaController',
    resolve: { 
      ListaTareaController: ['$ocLazyLoad', function($ocLazyLoad) {
             return $ocLazyLoad.load('controller/ListaTareaController.js');
      }]
    }
  }
  var tarea = {
    name: 'tarea',
    url: '/tarea/{idTarea}',
    templateUrl: 'vistas/altaTarea.html',
    controller: 'TareaController',
    data : {tareaId: 'tareaActual'},
    resolve: { 
        tareaActual: function( $transition$){
           return  $transition$.params().idTarea;
        },
      TareaController: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load('controller/TareaController.js');
      }],
      myformulario: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load('componentes/componentes.js');
      }]
    }
  }
  
  $stateProvider.state(estadoInicial);
  $stateProvider.state(listaTarea );
  $stateProvider.state(tarea );
  
});