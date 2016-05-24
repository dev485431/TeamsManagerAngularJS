'use strict';

angular.module('awesome-app.tabs')
    .config(function config($stateProvider) {

    $stateProvider
        .state('drop', {
            url: '^/drop',
            templateUrl: 'tabs/drop/drop.tpl.html',
            controller: 'DropCtrl'

        });
});