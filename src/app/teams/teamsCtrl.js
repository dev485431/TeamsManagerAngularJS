'use strict';

angular.module('awesome-app.teams')
    .controller('TeamsCtrl', function ($scope, TeamsDataService, TeamsService, TeamMemberCollection) {

        $scope.oneAtATime = true;
        $scope.teams = TeamsDataService.getTeams();
        $scope.regexpAlphanum = /^[A-Za-z0-9 ]+$/;

        $scope.addTeam = function (teamName, isFormValid) {
            if (isFormValid) {
                TeamsDataService.addTeam(new TeamMemberCollection(teamName));
                $scope.teamName = null;
            }
        };

        $scope.removeTeam = function () {
            var selectedTeamId = TeamsService.getSelectedTeam();
            TeamsDataService.removeTeam(selectedTeamId);
            TeamsService.setSelectedTeam(undefined);
        };

        $scope.setSelectedTeam = function (index) {
            TeamsService.setSelectedTeam(index);
            // console.log("Selected team in service: " + TeamsService.getSelectedTeam());
        };

        $scope.removeTeamMember = function (memberId) {
            console.log('Removing: ' + memberId);
            var selectedTeamId = TeamsService.getSelectedTeam();
            TeamsDataService.removeTeamMember(selectedTeamId, memberId);
        };

    });