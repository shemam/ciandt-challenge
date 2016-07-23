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
	angular.module('app').controller('AboutYourselfController', AboutYourselfController);

	/**
	 * About Yourself Controller Function
	 */
	function AboutYourselfController() {
		
		//Sets the "aboutYourself" variable to the current instance of the controller
		var aboutYourself = this;

		aboutYourself.teste = 'ahhhhhhhhhhhhhhhhhhhhhhh!!!!!!!!!!!!!!!!!';
	}

})()