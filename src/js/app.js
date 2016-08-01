/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	 * Angular Material Icon service Configuration
     * 
     * @param  {Angular.provider} $mdIconProvider - Angular Service for adding icons
     */
    angular.module('app').config(['$mdIconProvider', function ($mdIconProvider) {
        
        $mdIconProvider.defaultFontSet('material-icons');
    }]);

})()