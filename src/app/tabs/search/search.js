'use strict';

angular.module('awesome-app.tabs')
    .config(function config($stateProvider) {

    $stateProvider
        .state('home.tabs.search', {
            url: '/search',

            views: {
                'tab-content@home': {
                    templateUrl: 'tabs/search/search.tpl.html',
                    controller: 'SearchCtrl'
                }
            }


        });
});