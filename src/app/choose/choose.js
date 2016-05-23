'use strict';

angular.module('awesome-app.choose', ['ui.router']).

config(function config($stateProvider) {

    $stateProvider
        .state('choose', {
            url: '^/choose',
            views: {
                'choose': {
                    templateUrl: 'choose/choose.tpl.html',
                    controller: 'ChooseCtrl'
                },
                'teams': {
                    templateUrl: 'teams/teams.tpl.html',
                    controller: 'TeamsCtrl'
                }
            }
        });
});