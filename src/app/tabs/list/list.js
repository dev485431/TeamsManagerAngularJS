'use strict';

angular.module('awesome-app.tabs', ['ui.router'])
    .config(function config($stateProvider) {

    $stateProvider
        .state('home.list', {
            url: '/list',
            templateUrl: 'tabs/list/list.tpl.html',
            controller: 'ListCtrl'

        });
});