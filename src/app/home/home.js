'use strict';

angular.module('awesome-app.home', ['ui.router']).

config(function config($stateProvider) {

    $stateProvider
        .state('home', {
            url: '^/home',
            // views: {
            //     'search': {
            //         templateUrl: 'search/search.tpl.html',
            //         controller: 'SearchCtrl'
            //     },
            //     'choose': {
            //         templateUrl: 'choose/choose.tpl.html',
            //         controller: 'ChooseCtrl'
            //     },
            //     'teams': {
            //         templateUrl: 'teams/teams.tpl.html',
            //         controller: 'TeamsCtrl'
            //     }
            // },

            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html'
        });
});