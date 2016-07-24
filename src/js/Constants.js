/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* Constants
	*
	* Holds the constants of the app
	*/
	angular.module('app').constant('Constants', {

		//The movie franchise that the users will be queried about
		MOVIE_FRANCHISE : 'Star Wars',

		//The tv show that the user will be queried about
		TV_SHOW: 'Game of Thrones',

		//The api URL
		MOVIE_API_URL : 'http://www.omdbapi.com/'
	});


})()