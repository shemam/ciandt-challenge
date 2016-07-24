/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* AboutYourself Controller
	*
	* Controller that manages the About Yourself page
	*/
	angular.module('app').controller('AboutYourselfController', ['AnswersService', AboutYourselfController]);

	/**
	 * About Yourself Controller Function
	 */
	function AboutYourselfController(AnswersService) {
		
		//Sets the "aboutYourself" variable to the current instance of the controller
		var aboutYourself = this;

		//Sets the answare property with the AnswersService
		aboutYourself.answer = AnswersService;


		//The code below should be wraped in a "requestIdleCallback" in order not to block rendering
		//but as this resource is not yet available in all browsers I decided not to treat all cases here
		//Furthermore in this particular case the loop will run 5 times and should not present performance issues
		
		//Gets all the elements in the page with the "field" class in order to set eventListeners
		//to facilitate navigation on mobile
		var fields = document.querySelector('#aboutYourselForm').querySelectorAll(".field");

		//Loops throug the fields to set the listeners
		for (var i = 0; i < fields.length - 1; i++) {

			//Inside closure to create local scope for the var "i"
			//the ES6 let should do the trick but for some reason
			//my gulp setup is not prepared for it
			(function (i) {

				//Sets the event listener on the keypress event
				fields[i].addEventListener('keypress', function (event) {

					//If the key pressed was the enter key and the field is valid
					//goes to the next field
					if ((event.code == "Enter" 
						|| event.key == "Enter" 
						|| event.keyIdentifier == "Enter" 
						|| event.charCode == 13
						|| event.keyCode == 13)
						&& /ng-valid/.test(this.className)) {

						//if the condition is met sets focus on the next field
						fields[i+1].focus();
					}
				})

			//Passes the i variable to the local closure
			})(i)
		}
	}
})()