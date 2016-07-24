/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* Tv Show Controller
	*
	* Controller that manages the Tv Show page
	*/
	angular.module('app').controller('TvShowController', ['AnswersService', 'Constants', 'MovieApiService', TvShowController]);

	/**
	 * Tv Show Controller Function
	 */
	function TvShowController(AnswersService, Constants, MovieApiService) {
		
		//Sets the tvShow variable to the current instance of the controller
		var tvShow = this;

        tvShow.answer = AnswersService;

        //Call to the MovieApiService passing the Tv Show defined in the constants
        //The name of the Tv Show is passed in the "T" parameter for TITLE
        //Addtional information about the available types of parameters can be
        //found at http://www.omdbapi.com/
        MovieApiService({t:Constants.TV_SHOW}).then(function (response) {

            //Sets the object returned in the data
            //to the selected property of the controller
            tvShow.selected = response.data;
        })

        tvShow.getEpisodes = function (season) {

            //Call to the MovieApiService passing the Tv Show defined in the constants
            //The name of the Tv Show is passed in the "T" parameter for TITLE
            //and the Season parameter for the season number
            //Addtional information about the available types of parameters can be
            //found at http://www.omdbapi.com/
            MovieApiService({
                t:Constants.TV_SHOW,
                Season:season
            })
            .then(function (response) {

                //Sets the object returned in the data
                //to the selected property of the controller
                tvShow.seasonEpisodes = response.data.Episodes;
            })
        }

		//Function that returns an array of numbers representing the seasons
		//of the selected tv show based on the number of seasons in the selected tv show
		tvShow.seasons = function () {
			
			//Initializes the seasons collection with an empty array
			var seasons = [];

            //If the selected tv show is alredy set counts the seasons
            if (tvShow.selected) {

                //Runs a loop going from 1 to the total number of seasons of the selected tv show.
                for (var i = 1; i <= tvShow.selected.totalSeasons; i++) {

                    //Adds the number representing the season to the seasons collection
                    seasons.push(i);
                }
            }			

			//Returns the seasons collection
			return seasons;
		}

	}

})()