angular.module('app01').controller("ListaTareaController",
	['$scope','$state','TareaDao',function($scope,$state,tareaDao){
		console.log(tareaDao);
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
			console.log(id);

			$state.go('tarea',{idTarea:id});
		};

		// funcion que guarda una tarea
		$scope.nuevaTarea = function(){
			$state.go('tarea',{idTarea:0});
		};

		// funcion que borra una tarea
		$scope.borrarTarea = function(tarea){
			//tareaDao.borrarTarea(tarea);			
			//$scope.listaTareas = tareaDao.buscarTodos();
			// cambio cuando uso REST)
			console.log(tareaDao);
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