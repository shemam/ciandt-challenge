/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* Thanks Controller
	*
	* Controller that manages the Thanks page
	*/
	angular.module('app').controller('ThanksController', ThanksController);

	/**
	 * Thanks Controller Function
	 */
	function ThanksController() {
		
		//Sets the thanks variable to the current instance of the controller
		var thanks = this;

		thanks.title = 'Thank you for your time. YOU ROCK!';

		thanks.message = 'Well... if you are interested in knowing my answers to these questions here they go: \nFavorite comic book superhero: Batman\nTv Series currently watching: Breaking Bad\nBolacha or biscoito: Biscoito\nBest quote ever: Creativity is intelligence having fun\nFavorite Star Wars Movie: Episode 7\nFavorite Got Season: 1\nMy kind of food: Gimme meat'
	}

})()