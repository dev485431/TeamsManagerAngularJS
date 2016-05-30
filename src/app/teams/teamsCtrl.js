'use strict';

angular.module('awesome-app.teams').

controller('TeamsCtrl', function ($scope) {

    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.addTeam = function() {
        console.log('team added');
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };


});