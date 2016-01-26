var app = angular.module('employDirectory',[]);

app.controller("employee",function($scope,$http){
	$scope.indvidualEmp = false;
	$scope.contact = false;
	$http.get('/v1/employee').then(
		function(response){ 
			$scope.employees = response.data; 
		}
	);
	console.log($scope.employees);
	$scope.empDetail = function(emp){
		$scope.indvidualEmp = true;
		$scope.empind = emp;
		$scope.contact = false;
	}
	$scope.contactDetailsClick = function(){
		$scope.indvidualEmp = false;
		$scope.contact = true;
	}
	$scope.home = function(){
		$scope.indvidualEmp = false;
		$scope.contact = false;
	}
	$scope.contactDetails = {"id": 12, "firstName": "Koteeswaran", "lastName": "Ramachandran", "managerId": 6, managerName: "Vinyak", "title": "Software Developer", "department": "Engineering", "cellPhone": "+919840599416", "officePhone": "0442345678", "email": "kodee.ramachandran@hotmail.com", "city": "Chennai, India", "pic": "kotee.jpg"};
});