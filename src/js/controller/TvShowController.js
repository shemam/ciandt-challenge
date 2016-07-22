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
	angular.module('app').controller('TvShowController', TvShowController);

	/**
	 * Tv Show Controller Function
	 */
	function TvShowController() {
		
		//Sets the tvShow variable to the current instance of the controller
		var tvShow = this;

		//Function that returns an array of numbers representing the seasons
		//of the selected tv show based on the number of seasons in the selected tv show
		tvShow.seasons = function () {
			
			//Initializes the seasons collection with an empty array
			var seasons = [];

			//Runs a loop going from 1 to the total number of seasons of the selected tv show.
			for (var i = 1; i <= tvShow.selected.totalSeasons; i++) {

				//Adds the number representing the season to the seasons collection
				seasons.push(i);
			}

			//Returns the seasons collection
			return seasons;
		}

		tvShow.selected = {
			Title: "Game of Thrones",
			Year: "2011–",
			Rated: "TV-MA",
			Released: "17 Apr 2011",
			Runtime: "56 min",
			Genre: "Adventure, Drama, Fantasy",
			Director: "N/A",
			Writer: "David Benioff, D.B. Weiss",
			Actors: "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
			Plot: "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
			Language: "English",
			Country: "USA, UK",
			Awards: "Won 1 Golden Globe. Another 183 wins & 307 nominations.",
			Poster: "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
			Metascore: "N/A",
			imdbRating: "9.5",
			imdbVotes: "1,010,798",
			imdbID: "tt0944947",
			Type: "series",
			totalSeasons: "2",
			Response: "True"
		}

		tvShow.seasonEpisodes = [
  {
    "Title": "Winter Is Coming",
    "Released": "2011-04-17",
    "Episode": "1",
    "imdbRating": "8.9",
    "imdbID": "tt1480055"
  },
  {
    "Title": "The Kingsroad",
    "Released": "2011-04-24",
    "Episode": "2",
    "imdbRating": "8.7",
    "imdbID": "tt1668746"
  },
  {
    "Title": "Lord Snow",
    "Released": "2011-05-01",
    "Episode": "3",
    "imdbRating": "8.6",
    "imdbID": "tt1829962"
  },
  {
    "Title": "Cripples, Bastards, and Broken Things",
    "Released": "2011-05-08",
    "Episode": "4",
    "imdbRating": "8.7",
    "imdbID": "tt1829963"
  },
  {
    "Title": "The Wolf and the Lion",
    "Released": "2011-05-15",
    "Episode": "5",
    "imdbRating": "9.0",
    "imdbID": "tt1829964"
  },
  {
    "Title": "A Golden Crown",
    "Released": "2011-05-22",
    "Episode": "6",
    "imdbRating": "9.1",
    "imdbID": "tt1837862"
  },
  {
    "Title": "You Win or You Die",
    "Released": "2011-05-29",
    "Episode": "7",
    "imdbRating": "9.2",
    "imdbID": "tt1837863"
  },
  {
    "Title": "The Pointy End",
    "Released": "2011-06-05",
    "Episode": "8",
    "imdbRating": "8.9",
    "imdbID": "tt1837864"
  },
  {
    "Title": "Baelor",
    "Released": "2011-06-12",
    "Episode": "9",
    "imdbRating": "9.5",
    "imdbID": "tt1851398"
  },
  {
    "Title": "Fire and Blood",
    "Released": "2011-06-19",
    "Episode": "10",
    "imdbRating": "9.4",
    "imdbID": "tt1851397"
  }
]


	}

})()