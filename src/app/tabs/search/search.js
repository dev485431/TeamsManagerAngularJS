'use strict';

angular.module('awesome-app.tabs', ['ui.router', 'ui.router.tabs'])
    .config(function config($stateProvider) {

    $stateProvider
        .state('tabs.search', {
            url: '^/search',
            templateUrl: 'search/search.tpl.html',
            controller: 'SearchCtrl'

        });
});