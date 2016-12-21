angular.module('app01MemoryService',[]).factory('TareaDao', 
	function(){
		var listaTareas = [];
		var _ID=0;
		
		var fxAlta = function(tarea){
			tarea.id= ++_ID;
			listaTareas.push(tarea);
		}

		var fxBaja = function(tarea){
			for(var i = listaTareas.length - 1; i >= 0; i--) {
			    if(listaTareas[i].id ===tarea.id) {
			       listaTareas.splice(i, 1);
			       return;
			    }
			}
		}

		var fxModificar = function(tarea){
			for(var i = listaTareas.length - 1; i >= 0; i--) {
			    if(listaTareas[i].id ==tarea.id) {
			    	listaTareas[i]=tarea;
			    	return;
			    }
			}
		}

		var fxFindById = function(idBuscado){
			for(var i = listaTareas.length - 1; i >= 0; i--) {
			    if(listaTareas[i].id ==idBuscado) {			    	
			    	return listaTareas[i];
			    }
			}
		}

		var fxFindAll = function(){
			console.log(listaTareas);
			return listaTareas;
		}

		return {
			guardarTarea: fxAlta,
			actualizarTarea: fxModificar,
			borrarTarea: fxBaja,
			buscarPorId: fxFindById,
			buscarTodos: fxFindAll
  		};
	}
);