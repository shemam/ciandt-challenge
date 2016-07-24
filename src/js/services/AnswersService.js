/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* Answers Service
	*
	* Service where the answers are stored
	*/
	angular.module('app').service('AnswersService', AnswersService);

	/**
	 * Answers Service Function
	 */
	function AnswersService() {
		
		//Sets the answersService variable to the current instance of the service
		var answersService = this;

		//It was not specified where the data should be saved so this function
		//only logs it to the console
		this.save = function () {
			console.log(this);
		}

	}

})()