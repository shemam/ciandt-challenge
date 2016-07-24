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
	angular.module('app').controller('FoodController', ['AnswersService', FoodController]);

	/**
	 * Food Controller Function
	 */
	function FoodController(AnswersService) {
		
		//Sets the food variable to the current instance of the controller
		var food = this;

		//Sets the answare property with the AnswersService
		food.answer = AnswersService;

		//Array containin the food options
		food.foodOptions = [
			{
				value : 'I am an insect.',
				img : 'insect.jpg'
			},
			{
				value : 'I love pasta.',
				img : 'pasta.jpg'
			},
			{
				value : 'Gimme meat.',
				img : 'meat.jpg'
			},
			{
				value : 'Is it food? I am in.',
				img : 'food.jpg'
			}
		];
	}

})()