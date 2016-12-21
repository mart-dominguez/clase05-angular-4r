angular.module('appTestUI',['ui.router'])
    .component('mioferta', {
  template:  '<h3>{{$ctrl.oferta}} Compra hoy en 18 cuotas!</h3>' +
                '<p ng-show="$ctrl.verPrecio">a solo {{$ctrl.precio}}</p> '+
             '<button ng-click="$ctrl.togglePrecio()">Ver precio</button>',
           
  controller: function() {
    this.oferta = 'viaje a maaaiameeee';
    this.precio = 999.90;
    this.verPrecio = false;
  
    this.togglePrecio = function() {  
        console.log(this);
        console.log(this.verPrecio); 
        this.verPrecio = !this.verPrecio;
    }
  }
})
.config(function($stateProvider) {
 var estadoInicial= {
    name: 'inicial',
    url: '/inicio',
    template: '<h1>Estado Inicial!</h1>'
  }
  var estadoSecundario = {
    name: 'secundario',
    url: '/vista2',
    component: 'mioferta' 
  }
  $stateProvider.state(estadoInicial);
  $stateProvider.state(estadoSecundario );
});