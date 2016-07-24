/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* AboutYourself Controller
	*
	* Controller that manages the About Yourself page
	*/
	angular.module('app').controller('AboutYourselfController', ['AnswersService', AboutYourselfController]);

	/**
	 * About Yourself Controller Function
	 */
	function AboutYourselfController(AnswersService) {
		
		//Sets the "aboutYourself" variable to the current instance of the controller
		var aboutYourself = this;

		//Sets the answare property with the AnswersService
		aboutYourself.answer = AnswersService;

	}

})()