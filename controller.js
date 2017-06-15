angular.module("MyFirstApp",[])
	.controller("FisrtControler", function($scope, $http) {
		$http.get('http://rest-service.guides.spring.io/greeting').
			then(function(responde) {
				$scope.greeting = responde.data;
		});
	});