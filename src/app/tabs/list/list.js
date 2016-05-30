'use strict';

angular.module('awesome-app.tabs')
    .config(function config($stateProvider) {

    $stateProvider
        .state('home.tabs.list', {
            url: '/list',

            views: {
                'tab-content@home': {
                    templateUrl: 'tabs/list/list.tpl.html',
                    controller: 'ListCtrl'
                }
            }



        });
});