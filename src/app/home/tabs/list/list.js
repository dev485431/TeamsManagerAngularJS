'use strict';

angular.module('awesome-app.tabs', ['ui.router', 'ui.router.tabs'])
    .config(function config($stateProvider) {

    $stateProvider
        .state('home.list', {
            url: '/choose',
            templateUrl: 'home/tabs/list/list.tpl.html',
            controller: 'ListCtrl'

        });
});