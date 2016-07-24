/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* Movie Controller
	*
	* Controller that manages the Movie page
	*/
	angular.module('app').controller('MovieController', ['AnswersService', '$mdMedia', 'Constants', 'MovieApiService', MovieController]);

	/**
	 * Movie Controller Function
	 */
	function MovieController(AnswersService, $mdMedia, Constants, MovieApiService) {
		
		//Sets the movie variable to the current instance of the controller
		var movie = this;

		//Franchise name
		movie.franchise = Constants.MOVIE_FRANCHISE;

        //Sets the answare property with the AnswersService
        movie.answer = AnswersService;

        //Returns the chunk size for the row of movies
        movie.getChunk = function () {

            //If the screen is extra small chunk by 1
            if ($mdMedia('xs')) {
                return 1;

            //If the screen is small chunk by 2
            } else if($mdMedia('sm')){
                return 2;

            //For all the other screens chunk by 5
            } else {
                return 5;
            }
        };

        //Call to the MovieApiService passing the movie defined in the constants
        //The name of the movie is passed in the "s" parameter for search
        //Addtional information about the available types of parameters can be
        //found at http://www.omdbapi.com/
        MovieApiService({s:Constants.MOVIE_FRANCHISE}).then(function (response) {

            //Sets the array returned in the Search property of the data
            //to the movies property of the controller
            movie.movies = response.data.Search;
        })

		
	}

})()