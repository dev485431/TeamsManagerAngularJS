'use strict';

angular.module('awesome-app.teams')
    .controller('TeamsCtrl', function ($scope, teamsConf, TeamsDataService, SearchService, TeamsService, TeamMemberCollection) {

        var teamsLimit = teamsConf.teamsLimit;
        $scope.oneAtATime = true;
        $scope.teams = TeamsDataService.getTeams();
        $scope.regexpAlphanum = /^[A-Za-z0-9 ]+$/;

        $scope.addTeam = function (teamName, isFormValid) {
            var currentTeams = TeamsDataService.getTeams();
            if (isFormValid && currentTeams.length < teamsLimit) {
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
        };

        $scope.removeTeamMember = function (memberId) {
            console.log('Removing: ' + memberId);
            var selectedTeamId = TeamsService.getSelectedTeam();
            TeamsDataService.removeTeamMember(selectedTeamId, memberId);
            SearchService.removeTagObject(memberId);
        };

    });