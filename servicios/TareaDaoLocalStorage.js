angular.module('app01LocStoService',[]).factory('TareaDao', 
	['$window','$q','$timeout',function($window,$q,$timeout){
		var nombreTabla = "TAREAS";
		var seqTarea = "TAREA_SEQUENCE";

		var fxLastId = function(){
			var lastId=0;
			var item = $window.localStorage.getItem(seqTarea);
			if(item){
				lastId=parseInt(item);
			} 
			else {
				$window.localStorage.setItem(seqTarea,lastId);
			}
			return lastId;
		}

		var fxNextId = function(){
			var lastId=fxLastId()+1;
			$window.localStorage.setItem(seqTarea,lastId);
			return lastId;
		}


		var fxAlta = function(tarea){
			tarea.id = fxNextId();
			console.log(tarea);
			tarea.fechaFin=tarea.fechaFin.toJSON();
			console.log(tarea);
			$window.localStorage.setItem(nombreTabla+":"+tarea.id, angular.toJson(tarea));
		}

		var fxBaja = function(tarea){
			console.log(tarea);
			$window.localStorage.removeItem(nombreTabla+":"+tarea.id);
		}

		var fxModificar = function(tarea){
			$window.localStorage.removeItem(nombreTabla+":"+tarea.id);
			$window.localStorage.setItem(nombreTabla+":"+tarea.id, angular.toJson(tarea));
		}

		var fxFindById = function(idBuscado){
			var deffered = $q.defer();			
			$timeout(
				function(){ 
				var elemento = $window.localStorage.getItem(nombreTabla+":"+idBuscado);
				var aux = angular.fromJson(elemento);
				aux.fechaFin= new Date(aux.fechaFin);
				deffered.resolve(angular.fromJson(aux));
			},10,false);
			return deffered.promise;			
		}

		var fxFindAll = function(){
			var deffered = $q.defer();
			var listaResultado = [];
			var lastId =  fxLastId();
			$timeout(
				function(){ 
				for(var i =1; i<= lastId ; i++) {
					var elemento = $window.localStorage.getItem(nombreTabla+":"+i);
					var aux = angular.fromJson(elemento);
					aux.fechaFin= new Date(aux.fechaFin);
					if(elemento) listaResultado.push(aux);
				}	
					console.log(listaResultado);
					deffered.resolve(listaResultado)
			},10,false);
			
			return deffered.promise;
		}

		return {
			guardarTarea: fxAlta,
			actualizarTarea: fxModificar,
			borrarTarea: fxBaja,
			buscarPorId: fxFindById,
			buscarTodos: fxFindAll
  		};
	}]
);