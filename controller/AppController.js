angular.module('app01').controller("AppController",
	['$scope','$location',function($scope,$location){
		$scope.miContador =100;
		$scope.tituloApp = "Aplicacion ejemplo angular";
		
		$scope.funcionXYZ = function(){
					console.log(this);
					$location.path("/lista");
				};
		$scope.menu = [
			{
				opcion: "Gestion Tareas",
				operacion : function(){
					console.log(this);
					$location.path("/tarea");
				},
				activo:true
			},
			{
				opcion: "Listado de Tareas",
				operacion: function(){
					console.log(this);
					$location.path("/lista");
				},
				activo:false
			}
		];

		$scope.prioridades = [
			{
				id:1,
				titulo:"Urgente"
			},
			{
				id:2,
				titulo:"Alta"
			},
			{
				id:3,
				titulo:"Media"
			},
			{
				id:4,
				titulo:"Baja"
			}
		];
	}]
);