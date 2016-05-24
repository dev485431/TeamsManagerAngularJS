'use strict';

angular.module('awesome-app.home').

controller('HomeCtrl', function ($scope, $window, TeamMemberModel, TeamMemberCollection) {

    // $scope.team = new TeamMemberCollection('DataArt');
    //
    // $scope.teamMember = new TeamMemberModel('John')
    //     .addSkills(['JavaScript', 'AngularJS']);
    //
    // $scope.team.addMember($scope.teamMember);

    $scope.tabs = [
        { title:'Search', content:'Dynamic content 1', active: true },
        { title:'List', content:'Dynamic content 2' }
    ];

});
