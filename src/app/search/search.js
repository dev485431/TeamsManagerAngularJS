'use strict';

angular.module('awesome-app.search', ['ui.router']).

config(function config($stateProvider) {

    $stateProvider
        .state('search', {
            url: '^/search',
            views: {
                'search': {
                    templateUrl: 'search/search.tpl.html',
                    controller: 'SearchCtrl'
                },
                'teams': {
                    templateUrl: 'teams/teams.tpl.html',
                    controller: 'TeamsCtrl'
                }
            }
        });
});