/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */
(function(){

	/**
	* App Module.
	*
	* Main application module
	*/
	angular.module('app', ['ngMaterial','ui.router', 'ngMessages', 'angular.filter']);

	/**
     * Configuração do Serviço de Ícones do Angular Material
     * 
     * @param  {Angular.provider} $mdIconProvider - Serviço do Angular para inclusão de Ícones
     */
    angular.module('app').config(['$mdIconProvider', function ($mdIconProvider) {
        
        $mdIconProvider.defaultFontSet('material-icons');
    }]);

})()