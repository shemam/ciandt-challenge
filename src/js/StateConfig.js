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
	 * Configures all of the pages with their respective controllers, urls and states
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

		/**
		 * About Yourself State
		 *
		 * State related to the About Yourself page
		 * 	
		 * @type {State}
		 */
		.state('about-yourself', {
			url: '/about-yourself',
			templateUrl: 'about-yourself.html',
			controller: 'AboutYourselfController',
			controllerAs: 'aboutYourself'
		})

		/**
		 * Movie State
		 *
		 * State related to movie page
		 * 	
		 * @type {State}
		 */
		.state('movie', {
			url: '/movie',
			templateUrl: 'movie.html',
			controller: 'MovieController',
			controllerAs: 'movie'
		})

		/**
		 * Tv Show State
		 *
		 * State related to the tv show page
		 * 	
		 * @type {State}
		 */
		.state('tv-show', {
			url: '/tv-show',
			templateUrl: 'tv-show.html',
			controller: 'TvShowController',
			controllerAs: 'tvShow'
		})

		/**
		 * Food State
		 *
		 * State Related to the Favorit food page
		 * 	
		 * @type {State}
		 */
		.state('food', {
			url: '/food',
			templateUrl: 'food.html',
			controller: 'FoodController',
			controllerAs: 'food'
		})

		/**
		 * Review State
		 *
		 * State Related to the Review Page
		 * 	
		 * @type {State}
		 */
		.state('review', {
			url: '/review',
			templateUrl: 'review.html',
			controller: 'ReviewController',
			controllerAs: 'review'
		})

		/**
		 * Thanks State
		 *
		 * State Related to the Thanks Page
		 * 	
		 * @type {State}
		 */
		.state('thanks', {
			url: '/thanks',
			templateUrl: 'thanks.html',
			controller: 'ThanksController',
			controllerAs: 'thanks'
		})

	}

})()