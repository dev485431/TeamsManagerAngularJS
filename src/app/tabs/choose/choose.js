'use strict';

angular.module('awesome-app.tabs', ['ui.router', 'ui.router.tabs'])
    .config(function config($stateProvider) {

    $stateProvider
        .state('choose', {
            url: '^/choose',
            templateUrl: 'tabs/choose/choose.tpl.html',
            controller: 'ChooseCtrl'

        });
});