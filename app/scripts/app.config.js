angular.module('yookoreApp').config(function($urlRouterProvider, $stateProvider, $httpProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('main', {
		url:'/',
		templateUrl: '/views/main.html'
	})
	.state('register', {
		url:'/register',
		templateUrl: '/views/register.html',
		controller:'RegisterCtrl'
	})
	.state('logout', {
		url:'/logout',
		controller:'LogoutCtrl'
	})
	.state('status', {
		url:'/status',
		templateUrl: '/views/status.html',
		controller:'StatusCtrl'
	})
	.state('stream', {
		url:'/stream',
		templateUrl: '/views/stream.html',
		controller:'StreamCtrl'
	});

	$httpProvider.interceptors.push('authInterceptor');

})
.constant ('API_URL', 'http://localhost:3000/');