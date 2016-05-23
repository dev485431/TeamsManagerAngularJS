'use strict';

angular.module('awesome-app.teams', ['ui.router']).

config(function config($stateProvider) {

    $stateProvider
        .state('teams', {
            controller: 'TeamsCtrl',
            templateUrl: 'teams/teams.tpl.html'
        });
});