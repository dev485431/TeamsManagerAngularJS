'use strict';

angular.module('awesome-app', [
    'ui.router',
    'ui.router.tabs',
    'ui.bootstrap',
    'ngSanitize',
    'templates-app',
    'awesome-app.common',
    'awesome-app.home',
    'awesome-app.tabs',
    'awesome-app.about'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
}]);
