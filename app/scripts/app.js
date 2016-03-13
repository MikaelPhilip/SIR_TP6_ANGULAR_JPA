'use strict';

/**
 * @ngdoc overview
 * @name yomanProjectApp
 * @description
 * # yomanProjectApp
 *
 * Main module of the application.
 */
angular
  .module('yomanProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//Declaration du module
var dataApp = angular.module('data', ['ngResource'])  

//Liste des url qu'on va appeller/utiliser (url qui pointes vers des webservices de l'applicaiton java OPower)
var dataHeaterUrl = "http://localhost:9000/rest/opower/dataHeater"
var dataPersonUrl = "http://localhost:9000/rest/opower/dataPerson"
var subscribeUrl = "http://localhost:9000/rest/opower/personJSON" 

/*Declaration d'un controleur du module*/
dataApp.controller('ctrlListeChauffage', ctrlListeChauffage); //Associé un controleur à une fonnction

//Fonction associé à la ng-controler: va permettre d'associer un model au controleur et les différents traitements possibles
function  ctrlListeChauffage($scope, $http, $log){
	//Ici on fait juste une requete pour récuperer la liste de résultat
    $http({
        method: 'GET',
        url: dataHeaterUrl,
    }).then(function successCallback(response) {
			console.log(response.data);
			$scope.listHeaters= response.data.heater;
    });
}

/*Declaration d'un controleur du module*/
dataApp.controller('ctrlListePersonne', ctrlListePersonne); //Associé un controleur à une fonnction

//Fonction associé à la ng-controler: va permettre d'associer un model au controleur et les différents traitements possibles
function  ctrlListePersonne($scope, $http, $log){
	//Ici on fait juste une requete pour récuperer la liste de résultat
    $http({
        method: 'GET',
        url: dataPersonUrl,
    }).then(function successCallback(response) {
			console.log(response.data);
			$scope.listPersonnes= response.data.person;
    });
}

dataApp.controller('subscribe', subscribe);

//Fonction associé à la ng-controler: va permettre d'associer un model au controleur et les différents traitements possibles
function subscribe($scope, $http, $log,$window){
	//Ici quand on appelle subscribe on va lancer une requête post vers un webservice JAVA
	$scope.subscribe = function(item) {
		//Requete pour récuperer la liste de résultat
		$http({
			method: 'POST',
			url: subscribeUrl,
		data:  {name: item} //C'est ici qu'on envoie les paramêtres sous un format JSON (Donc penser à traiter les paramêtres avec le JSON dans le webservice)
		}).then(function successCallback(response) {
			$window.location.href = "http://localhost:9000/dataPerson.html"; //Redirection vers le formulaire qui affichera la liste de personnes
		});
	}
}