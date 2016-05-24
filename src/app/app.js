'use strict';

angular.module('awesome-app', [
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ui.router.tabs',
    'templates-app',
    'awesome-app.common',
    'awesome-app.about',
    'awesome-app.search',
    'awesome-app.choose',
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/search');
}]);
