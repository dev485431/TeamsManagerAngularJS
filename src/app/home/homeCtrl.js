'use strict';

angular.module('awesome-app.home').

controller('HomeCtrl', function ($scope) {

    $scope.tabs = [
        { title:'Search', content:'Dynamic content 1', active: true },
        { title:'List', content:'Dynamic content 2' }
    ];

});
