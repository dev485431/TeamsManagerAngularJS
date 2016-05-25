'use strict';

angular.module('awesome-app.teams',  ['ui.router'])
    .config(function config($stateProvider) {

        $stateProvider
            .state('teams', {
                url: '/teams',
                templateUrl: 'teams/teams.tpl.html',
                controller: 'TeamsCtrl'

            });
    });