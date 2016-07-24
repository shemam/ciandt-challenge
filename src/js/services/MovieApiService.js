/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* MovieApi Service
	*
	* Service where the MovieApi are stored
	*/
	angular.module('app').factory('MovieApiService', ['Constants', '$http', MovieApiService]);

	/**
	 * MovieApiService Function
	 */
	function MovieApiService(Constants, $http) {
		
		/**
		 * Function that starts a $http request to get
		 * the movies or series asked in the controller
		 * 
		 * @param  {Object} params Parameters to be passed to the $http call
		 * @return {Promise} Promise that will be fulfilled with the response
		 */
		return function (params) {
			
			//Returns the result ofthe $http call
			return $http({
				method: 'GET',
				params: params,
				url: Constants.MOVIE_API_URL
			});
		}

	}

})()