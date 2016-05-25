'use strict';

angular.module('awesome-app.tabs')
    .config(function config($stateProvider) {

    $stateProvider
        .state('home.list', {
            url: '/list',
            templateUrl: 'tabs/list/list.tpl.html',
            controller: 'ListCtrl'

        });
});