angular.module('app01').controller("TareaController",
	['$scope','$routeParams','TareaDao',function($scope,$routeParams,tareaDao){
		$scope.tituloAlta = "Alta de tareas";
		console.log($routeParams.tareaId);
		
		if($routeParams.tareaId>0){
			/*$scope.tareaActual = $scope.listaTareas.find(function(unaTarea){
				console.log(unaTarea.id);
				console.log($routeParams.taereaId);				
				return unaTarea.id === $routeParams.taereaId;
			});*/
			//$scope.tareaActual = tareaDao.buscarPorId($routeParams.tareaId);
			tareaDao.buscarPorId($routeParams.tareaId).then(
				function(data){
					$scope.tareaActual = data;
				}
			);
		} else{
			// definimos un objeto que almacena la tarea
			$scope.tareaActual = {
				fechaFin:new Date()
			};
		}		
		
	}]
);