'use strict';

angular.module('awesome-app.teams')
    .config(function config($stateProvider) {

        $stateProvider
            .state('teams', {
                url: '/home',
                templateUrl: 'teams/teams.tpl.html',
                controller: 'TeamsCtrl'

            });
    });