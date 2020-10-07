"use strict";
app.controller('userCtrl', ['$scope', function($scope){	
	
	$scope.dashBoard = true;	
	$scope.userProfile = false;	
	$scope.myCar = false;	
		
	$scope.dashboardLink = function() {
		$scope.dashBoard = true;
		$scope.userProfile = false;
		$scope.myCar = false;
	}
	
	$scope.profileLink = function() {
		$scope.dashBoard = false;
		$scope.userProfile = true;
		$scope.myCar = false;
	}

	$scope.myCarLink = function() {
		$scope.dashBoard = false;
		$scope.userProfile = false;
		$scope.myCar = true;
	}
		
}]);