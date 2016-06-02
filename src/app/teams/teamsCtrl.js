'use strict';

angular.module('awesome-app.teams')
    .controller('TeamsCtrl', function ($scope, TeamsService, TeamMemberCollection) {

        $scope.oneAtATime = true;
        $scope.teams = TeamsService.getTeams();
        $scope.regexpAlphanum = /^[A-Za-z0-9 ]+$/;
        $scope.members = [];

        $scope.addTeam = function (teamName, isFormValid) {
            if (isFormValid) {
                $scope.teams.push(
                    new TeamMemberCollection(teamName)
                );
            }
        };

        $scope.addMember = function () {
            $scope.members.push('Item');
        };

        $scope.setActiveTeam = function (group, i) {
            console.log("Opened group with offset: "+ i);
            $scope.activeAccordion = i;
        };

    });