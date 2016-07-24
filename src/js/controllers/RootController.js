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

		//Title shown in the page
		root.title = 'CI&T Challenge';

		//First page message
		root.message = 'This simple app is an answer to the CI&T challenge. Click on the "Start the Survey" button to start answering the questions in the app.'
	}

})()