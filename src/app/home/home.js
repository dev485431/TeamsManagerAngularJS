'use strict';

angular.module('awesome-app.home')
    .config(function config($stateProvider) {

        $stateProvider
            .state('home', {
                abstract: true,
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'

            });
    });