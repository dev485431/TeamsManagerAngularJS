'use strict';

angular.module('awesome-app.home')
    .config(function config($stateProvider) {

        $stateProvider
            .state('home', {
                abstract: true,

                views: {
                    'tabs': {
                        template: '<div ui-view="tabs"></div>',
                    },
                    'teams': {
                        templateUrl: 'teams/teams.tpl.html',
                        controller: 'TeamsCtrl'
                    }
                }

            });
    });