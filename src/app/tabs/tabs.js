'use strict';

angular.module('awesome-app.tabs')
    .config(function config($stateProvider) {

        $stateProvider
            .state('home.tabs', {
                abstract: true,
                controller: 'TabsCtrl',

                views: {
                    'tabs':  { templateUrl: 'tabs/tabs.tpl.html' }
                }

            });
    });