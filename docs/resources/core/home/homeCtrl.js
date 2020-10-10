app.controller('homeCtrl', ['$scope', function($scope){
	
	$scope.linkMustang = function() {
		window.location = "#/mustang";
	}

	$scope.goShop = function() {
        window.location = '#/shop';
	}
	
	$scope.goAbout = function() {
        window.location = '#/about';
    }

}]);