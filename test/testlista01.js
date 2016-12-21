describe('tarea01', function() {
  beforeEach(module('app01'));

  var $controller;
  var myDaoMock;
  var $rootScope;

  beforeEach(inject(function(_$controller_,$q,_$rootScope_){
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    var unaTarea = {
      "fechaFin": "2016-11-29T20:30:23.337Z",
      "titulo": "Hola",
      "horas": 234,
      "prioridad": {
          "id": 1,
          "titulo": "Urgente"
        },
          "id": 2
    };
    myDaoMock = {
      buscarPorId : function(id) {
          var deferred = $q.defer();
          deferred.resolve(unaTarea);
          return deferred.promise;   
        }
      }; 
  }));

  describe('test1', function() {
    it('con ID 0 setea fecha no nula', function() {
      var $scope = {};
      var $routeParams = {tareaId: 0};
      var myDao = {};
      var controller = $controller('TareaController', { $scope: $scope ,$routeParams:$routeParams ,TareaDao:myDao});
      expect($scope.tareaActual.fechaFin).not.toBeNull();
    });

    it('con ID 1 setea fecha nula', function() {
      var $scope = {};
      var $routeParams = {tareaId: 1};
      var myDao = {};
      var controller = $controller('TareaController', { $scope: $scope ,$routeParams:$routeParams ,TareaDao:myDaoMock});
      // es undefined porque no resuelve en el digest   --> $rootScope.$apply();
      expect($scope.tareaActual).toBeUndefined();
    });

    it('con ID 2 setea tarea2', function() {
      var $scope = {};
      var $routeParams = {tareaId: 2};
      var controller = $controller('TareaController', { $scope: $scope ,$routeParams:$routeParams ,TareaDao:myDaoMock});
        $rootScope.$apply();
        expect($scope.tareaActual.id).toBe(2);
    });

  });
});