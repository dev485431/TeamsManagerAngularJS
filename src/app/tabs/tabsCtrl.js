'use strict';

angular.module('awesome-app.choose')
    .controller('TabsCtrl', function ($scope) {

        $scope.tabData = [
        {
            heading: 'Settings',
            route: 'user.settings'
        },
        {
            heading: 'Accounts',
            route: 'user.accounts',
            disable: true
        }
    ];


});