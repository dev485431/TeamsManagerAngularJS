'use strict';

angular.module('awesome-app.tabs')
    .config(function config($stateProvider) {

    $stateProvider
        .state('search', {
            url: '^/search',
            templateUrl: 'tabs/search/search.tpl.html',
            controller: 'SearchCtrl'

        });
});