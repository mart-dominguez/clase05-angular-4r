angular.module('app01').controller("ListaTareaController",
	['$scope','$location','TareaDao',function($scope,$location,tareaDao){
		$scope.tituloLista = "Lista de tareas";		
		//$scope.listaTareas =tareaDao.buscarTodos();
		tareaDao.buscarTodos().then(
				function(resultado){
					console.log(resultado);
					$scope.listaTareas =resultado;
				},
				function(e){
					console.log(e);
				}
			);	
		$scope.editarTarea = function(id){
			$location.path("/tarea/"+id);
		};

		// funcion que guarda una tarea
		$scope.nuevaTarea = function(){
			$location.path("/tarea");
		};

		// funcion que borra una tarea
		$scope.borrarTarea = function(tarea){
			//tareaDao.borrarTarea(tarea);			
			//$scope.listaTareas = tareaDao.buscarTodos();
			// cambio cuando uso REST)

			tareaDao.borrarTarea(tarea).then(
				function(d){
					console.log(d);
					tareaDao.buscarTodos().then(
						function(resultado){
							$scope.listaTareas =resultado;
						},
						function(e){
							console.log(e);
						}
					);
				}
			);
		};		
	}]
);