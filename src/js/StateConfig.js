/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
 (function(){

	/**
	* State configuration
	*
	* Main application module
	*/
	angular.module('app').config(['$stateProvider', '$urlRouterProvider', stateConfig]);

	/**
	 * State configuration function
	 * 
	 * @param  {AngularProvider} $stateProvider     Provides state manegment functions
	 * @param  {AngularProvider} $urlRouterProvider Provides url manegment functions
	 */
	function stateConfig($stateProvider, $urlRouterProvider) {

		// For any unmatched url, redirect to '/'
		$urlRouterProvider.otherwise('/');

		// Setup the states
		$stateProvider

		/**
		 * Root State
		 * 	
		 * @type {State}
		 */
		.state('root', {
			url: '/',
			templateUrl: 'root.html',
			controller: 'RootController',
			controllerAs: 'root'
		})

	}

})()