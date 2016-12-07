'use strict';

/**
 * @ngdoc overview
 * @name circleKApp
 * @description
 * # circleKApp
 *
 * Main module of the application.
 */
angular
  .module('circleKApp', [
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


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
var GameSchema = new Schema({
  name: String,
 
});
 
module.exports = mongoose.model('User', GameSchema);