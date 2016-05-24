'use strict';

angular.module('awesome-app.tabs', ['ui.router', 'ui.router.tabs'])
    .config(function config($stateProvider) {

    $stateProvider
        .state('home.choose', {
            url: '/choose',
            templateUrl: 'tabs/choose/choose.tpl.html',
            controller: 'ChooseCtrl'

        });
});