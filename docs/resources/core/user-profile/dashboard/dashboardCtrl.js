"use strict";
app.controller('dashboardCtrl', ['$scope', 
									'UserLocalService',
									'UserLocalCarsService', 
									function($scope, 
											UserLocalService,
											UserLocalCarsService){		
	
	$scope.user = UserLocalService.getUserLocal();
		
	$scope.account = UserLocalCarsService.getUserCars();
		
}]);