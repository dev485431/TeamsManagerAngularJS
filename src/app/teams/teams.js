'use strict';

angular.module('awesome-app.teams',  ['ui.router'])
    .config(function config($stateProvider) {

        $stateProvider
            .state('home.teams', {
                abstract: true,
                controller: 'TeamsCtrl',

                views: {
                    'teams':  { templateUrl: 'teams/teams.tpl.html' }
                }

            });
    });