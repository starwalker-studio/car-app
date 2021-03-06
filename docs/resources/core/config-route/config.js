app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	
	$locationProvider.hashPrefix('');

	$routeProvider
		.when('/',{
			templateUrl: 'resources/core/home/home.html',
			controller: 'homeCtrl'
		})
		.when('/dashboard',{
			templateUrl: 'resources/core/user-profile/user.html',
			controller: 'userCtrl'
		})
		.when('/register',{
			templateUrl: 'resources/core/user-profile/register-user/register-user.html',
			controller: 'registerCtrl'
		})
		.when('/shop',{
			templateUrl: 'resources/core/shop/shop.html',
			controller: 'shopCtrl'
		})
		.when('/mustang',{
			templateUrl: 'resources/core/mustang-intro/mustang.html',
			controller: 'mustangCtrl'
		})
		.when('/about',{
			templateUrl: 'resources/core/about-me/about.html',
			controller: 'aboutCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	
}]);