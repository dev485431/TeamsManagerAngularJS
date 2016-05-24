'use strict';

angular.module('awesome-app.home').

controller('HomeCtrl', function ($scope, TeamMemberModel, TeamMemberCollection) {

    $scope.team = new TeamMemberCollection('DataArt');

    $scope.teamMember = new TeamMemberModel('John')
        .addSkills(['JavaScript', 'AngularJS']);

    $scope.team.addMember($scope.teamMember);

    $scope.tabData = [
        {
            heading: 'Search',
            route: 'search',
            class: 'nav nav-pills'
        },
        {
            heading: 'Choose',
            route: 'choose',
            class: 'nav nav-pills'
        }
    ];

});
