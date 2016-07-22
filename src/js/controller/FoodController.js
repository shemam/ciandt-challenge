/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* Food Controller
	*
	* Controller that manages the Food page
	*/
	angular.module('app').controller('FoodController', FoodController);

	/**
	 * Food Controller Function
	 */
	function FoodController() {
		
		//Sets the food variable to the current instance of the controller
		var food = this;

		food.teste = 'ahhhhhhhhhhhhhhhhhhhhhhh!!!!!!!!!!!!!!!!!';
	}

})()