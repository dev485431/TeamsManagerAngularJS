'use strict';

angular.module('awesome-app.tabs')
    .config(function config($stateProvider) {

        $stateProvider
            .state('home.tabs', {
                abstract: true,

                views: {
                    'tabs':  {
                        templateUrl: 'tabs/tabs.tpl.html',
                        controller: 'TabsCtrl'
                    },
                    'teams':  {
                        templateUrl: 'teams/teams.tpl.html',
                        controller: 'TeamsCtrl'
                    }
                }

            });
    });