"use strict";
var app = angular.module('fordApp', ['ngRoute',
									'ui.bootstrap',
									'userLocal.service',
									'userLocalCars.service',
									'catalog.service',
									'constants']);

app.controller('mainCtrl', ['$scope', 'UserLocalService', function ($scope, UserLocalService) {
		
	
	$scope.user = UserLocalService.getUserLocal();
	
	$scope.logOut = function () {
		UserLocalService.deleteUserLocal();
		window.location = '/fordApp/';
	}

}]);