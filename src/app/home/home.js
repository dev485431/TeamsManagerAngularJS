'use strict';

angular.module('awesome-app.home', ['ui.router', 'ui.bootstrap']).

config(function config($stateProvider) {

    $stateProvider
        .state('home', {
            url: '^/home',
            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html',
        });
});