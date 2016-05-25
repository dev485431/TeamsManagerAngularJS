'use strict';

angular.module('awesome-app.teams',  ['ui.router'])
    .config(function config($stateProvider) {

        $stateProvider
            .state('home.teams', {
                url: '/teams',
                templateUrl: 'home/teams/teams.tpl.html',
                controller: 'TeamsCtrl'

            });
    });