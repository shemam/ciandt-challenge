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
	angular.module('app').controller('MovieController', MovieController);

	/**
	 * Movie Controller Function
	 */
	function MovieController() {
		
		//Sets the movie variable to the current instance of the controller
		var movie = this;

		//Franchise name
		movie.franchise = 'Star Wars';

		//The choosen movie
		movie.favorite = {};

		movie.movies = [
  {
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode I - The Phantom Menace",
    "Year": "1999",
    "imdbID": "tt0120915",
    "Type": "movie",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode III - Revenge of the Sith",
    "Year": "2005",
    "imdbID": "tt0121766",
    "Type": "movie",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode II - Attack of the Clones",
    "Year": "2002",
    "imdbID": "tt0121765",
    "Type": "movie",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SX300.jpg"
  },
  {
    "Title": "Robot Chicken: Star Wars Episode II",
    "Year": "2008",
    "imdbID": "tt1334272",
    "Type": "movie",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIyNTg2OTcyOV5BMl5BanBnXkFtZTcwNDQxODQzNA@@._V1._CR342,682,819,1182_SY132_CR1,0,89,132_AL_.jpg_V1_SX300.jpg"
  },
  {
    "Title": "Robot Chicken: Star Wars Episode III",
    "Year": "2010",
    "imdbID": "tt1691338",
    "Type": "movie",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAyNTYzODM3OF5BMl5BanBnXkFtZTcwMTY4ODM4NA@@._V1._CR21,12,310,461_SX89_AL_.jpg_V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode III - Revenge of the Sith",
    "Year": "2005",
    "imdbID": "tt0462553",
    "Type": "game",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BYTFlMDllYzgtMWM2MS00MzM1LTk3OTYtNjhiMWFjZmI4ODg3XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode I - Racer",
    "Year": "2000",
    "imdbID": "tt0200172",
    "Type": "game",
    "Poster": "N/A"
  }
]
	}

})()