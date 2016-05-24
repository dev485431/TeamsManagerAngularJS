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
        { title:'Dynamic Title 1', content:'Dynamic content 1', active: true },
        { title:'Dynamic Title 2', content:'Dynamic content 2' }
    ];

});
