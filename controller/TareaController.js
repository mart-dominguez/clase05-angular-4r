angular.module('app01').controller("TareaController",
	['$scope','TareaDao','$state', '$stateParams',function($scope,tareaDao,$state, $stateParams){
		$scope.tituloAlta = "Alta de tareas";
		console.log($state.current.data);
		console.log($stateParams);
		
		if($state.current.data.tareaId>0){
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