/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* Review Controller
	*
	* Controller that manages the Review page
	*/
	angular.module('app').controller('ReviewController', ['AnswersService', 'Constants', ReviewController]);

	/**
	 * Review Controller Function
	 */
	function ReviewController(AnswersService, Constants) {
		
		//Sets the review variable to the current instance of the controller
		var review = this;

		//Sets the answare property with the AnswersService
		review.answer = AnswersService;

		//Returns the tv show name plus the selected season
		review.getTvShow = function () {

			//If there is a season selected returns it concatenated with the tv show name
			if (review.answer.season) {
				return (Constants.TV_SHOW + " Season: " + review.answer.season).toUpperCase();

			//Or else returns the not informed message
			} else {
				return "NOT INFORMED";
			}
		}
	}

})()