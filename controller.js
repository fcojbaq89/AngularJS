var app = angular.module("myApp", ["LocalStorageModule"]);

app.controller("myCtrl", function($scope, $http) {
	$http.get('http://rest-service.guides.spring.io/greeting')
	.then(function(responde) {
		$scope.greeting = responde.data;
	});
});

app.controller('questionController', function($scope) {
	//objeto pregunta
	$scope.pregunta = {
		id: 1,
		premisa: '¿Que tipo de Framework es AngularJS?',
		respuestas: [
			{
				id: 1,
				text: 'MVC',
				active: 'false'
			},
			{
				id: 2,
				text: 'MVVM',
				active: 'false'
			},
			{
				id: 3,
				text: 'MVR',
				active: 'false'
			},
			{
				id: 4,
				text: 'MVW',
				active: 'false'
			}
		]
	};
	$scope.marcar = function() {
		angular.forEach($scope.pregunta.respuestas, function(value, key) {
			value.active = false;
		});
		this.key.active = true;
	};
	$scope.respuestas = [];
	$scope.responder = function() {
		angular.forEach($scope.pregunta.respuestas, function(respuesta, i) {
			if (respuesta.active)
				$scope.respuestas.push({ id:$scope.id, key:respuesta.id });
		});
	};
});

app.controller('myCtrl', ['$scope', function($scope) {
	$scope.count = 0;
	$scope.myFunc = function() {
		$scope.count++;
	};
}]);

app.controller('customersCtrl', function($scope, localStorageService) {
	
	if(localStorageService.get("angular-todolist")) {
		$scope.friends = localStorageService.get("angular-todolist");
	} else {
		$scope.friends = [
			{name:'John', age:25, gender:'boy'},
			{name:'Jessie', age:30, gender:'girl'},
			{name:'Johanna', age:28, gender:'girl'}
		];
	};
	
	$scope.add = function() {
		$scope.friends.push({ name: $scope.name, age: $scope.age, gender: $scope.age });
		
		$scope.name = '';
		$scope.age = '';
		$scope.gender = '';
		
		localStorageService.set("angular-todolist", $scope.friends);
	};
	
	$scope.clean = function() {		
		$scope.friends = [
			{name:'John', age:25, gender:'boy'},
			{name:'Jessie', age:30, gender:'girl'},
			{name:'Johanna', age:28, gender:'girl'}
		];
		
		localStorageService.set("angular-todolist", $scope.friends);
	};
});