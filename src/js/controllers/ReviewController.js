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
	angular.module('app').controller('ReviewController', ReviewController);

	/**
	 * Review Controller Function
	 */
	function ReviewController() {
		
		//Sets the review variable to the current instance of the controller
		var review = this;

		review.superHero = 'Superman';

		review.tvShow = 'Breaking Bad';

		review.biscuit = 'Bisoito';

		review.quote = 'Imagination is more important than knowledge';

		review.movie = 'Star Wars episode X';

		review.season = 'Got - Season X';

		review.food = 'Gimme meat';
	}

})()