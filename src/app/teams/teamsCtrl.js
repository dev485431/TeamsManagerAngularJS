'use strict';

angular.module('awesome-app.teams')
    .controller('TeamsCtrl', function ($scope, TeamsService, TeamMemberCollection) {

        $scope.oneAtATime = true;
        $scope.teams = TeamsService.getTeams();
        $scope.regexpAlphanum = /^[A-Za-z0-9 ]+$/;
        var errorNameExists = 'Team name already exists';

        $scope.addTeam = function (teamName, isFormValid) {
            if (isFormValid) {
                TeamsService.addTeam(new TeamMemberCollection(teamName));
            }
        };

        $scope.addMember = function () {
            // $scope.members.push('Item');
        };

        $scope.setActiveTeam = function (group, i) {
            console.log("Opened group with offset: " + i);
            $scope.activeAccordion = i;
        };

        var setErrorMsg = function (errorMsg) {
            $scope.validationError = {
                status: true,
                msg: errorMsg
            };
        };
    });