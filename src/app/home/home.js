'use strict';

angular.module('awesome-app.home')
    .config(function config($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/home',

                views: {
                    'tabs': {
                        templateUrl: 'tabs/tabs.tpl.html',
                        controller: 'TabsCtrl'
                    },
                    'teams': {
                        templateUrl: 'teams/teams.tpl.html',
                        controller: 'TeamsCtrl'
                    }
                }

            });
    });