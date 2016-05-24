'use strict';

angular.module('awesome-app.tabs', ['ui.router', 'ui.router.tabs'])
    .config(function config($stateProvider) {

        $stateProvider
            .state('tabs', {
                abstract: true,
                controller: 'TabsCtrl'

            });
    });