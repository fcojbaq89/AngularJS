angular.module("MyFirstApp",[])
	.controller("FisrtControler", function($scope){
		$scope.nombre = "Francisco Jose";
		$scope.nuevoComentario = {};
		$scope.comentarios = [
			{
				comentario: "Buen tutorial",
				username: "fcojbaq89"
			},
			{
				comentario: "Malísimo el tutorial",
				username: "otro_usuario"
			}
		];
		$scope.agregarComentario = function() {
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.nuevoComentario = {};
		}
	});