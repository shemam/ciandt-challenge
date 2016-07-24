/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* fallbackSrc
	*
	* Directive to set a fallback img in case of an error
	*/
	angular.module('app').directive('fallbackSrc', fallbackSrc);

	/**
	 * fallbackSrc Function
	 */
	function fallbackSrc() {
		
		return {
			link: function (scope, iElement, iAttrs) {
				iElement.bind('error', function() {
					angular.element(this).attr("src", iAttrs.fallbackSrc);
				});
			}
		}

	}

})()