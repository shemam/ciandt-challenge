/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* Root Controller
	*
	* Controller that manages the root page
	*/
	angular.module('app').controller('RootController', RootController);

	/**
	 * Root Controller Function
	 */
	function RootController() {
		
		//Sets the root variable to the current instance of the controller
		var root = this;

		root.teste = 'ahhhhhhhhhhhhhhhhhhhhhhh!!!!!!!!!!!!!!!!!';
	}

})()