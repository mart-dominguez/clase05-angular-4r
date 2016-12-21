angular.module('app01RestService',[])
    .value('serverURL', 'http://localhost:4999/tareas/')
	.factory('TareaDao', 
	['$http','$q','serverURL',function($http,$q,serverURL){

		var fxAlta = function(tarea){
   			var deffered = $q.defer();
			$http.post(serverURL,tarea)
			.success(function(data, status, headers, config) {
                    deffered.resolve(data);
			}).error(function(data, status, headers, config) {
                    console.log(data);
            });
			return deffered.promise;
		}

		var fxBaja = function(tarea){
			var deffered = $q.defer();
			$http.delete(serverURL+tarea.id)
			.success(function(data, status, headers, config) {
                    deffered.resolve(data);
			}).error(function(data, status, headers, config) {
                    console.log(data);
            });
			return deffered.promise;
		}

		var fxModificar = function(tarea){
			var deffered = $q.defer();
			$http.put(serverURL+"/"+tarea.id+"/",tarea)
			.success(function(data, status, headers, config) {
                    deffered.resolve(data);
			}).error(function(data, status, headers, config) {
                    console.log(data);
            });
			return deffered.promise;

		}

		var fxFindById = function(idBuscado){
			var deffered = $q.defer();
			$http.get(serverURL+idBuscado)
			.success(function(data, status, headers, config) {
                    deffered.resolve(data);
			}).error(function(data, status, headers, config) {
                    console.log(data);
            });
			return deffered.promise;
		}

		var fxFindAll = function(){
			var deffered = $q.defer();
			$http.get(serverURL)
			.success(function(data, status, headers, config) {
                    deffered.resolve(data);
			}).error(function(data, status, headers, config) {
                    console.log(data);
            });
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