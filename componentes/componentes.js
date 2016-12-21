angular.module('app01')
    .component('myformulario',{
        bindings: {
            tituloAlta:'@',
            tarea:'<',
            habilitado:'<',
            prioridades:'<'
        },
        controller: ['TareaDao','$routeParams',function(tareaDao,$routeParams){
            this.$onInit = function () {
                console.log(this);
                this.habilitado=false;
                this.tarea={};
            };
                this.agregarTarea = function(){
                    if($routeParams.tareaId>0){
                        tareaDao.actualizarTarea(this.tarea);   
                    }else{
                        tareaDao.guardarTarea(this.tarea);  
                    }
                    this.tarea={};
                };
                // funcion que guarda una tarea
                this.nuevaTarea = function(){
                    console.log(this.tarea);        
                    this.tarea = {
                        fechaFin:new Date()
                    };
                    console.log(this.tarea);            
                }
                this.updateTarea= function(campo,valor){
                    console.log(campo);
                    console.log(valor);
                    if(campo==="titulo") this.habilitado=true;
                    this.tarea[campo]=valor;
                };
            }
        ],
        transclude: false,
        templateUrl:'templates/componentes/myformulario.html'
    })
    .component('myinput',{
        bindings: {
            etiqueta:'@',
            campo:'@',
            tipo:'@',
            valor:'<',
            onUpdate:'&',
        },
        controller: function(){
            this.actualizar = function () {
                console.log(this.valor);
                console.log(this.campo);
                this.onUpdate({campo: this.campo,valor:this.valor});
            };
        },
        transclude: false,
        templateUrl:'templates/componentes/myinput.html'
    })