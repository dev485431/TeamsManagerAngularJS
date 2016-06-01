'use strict';

angular.module('awesome-app.teams')
    .controller('TeamsCtrl', function ($scope, TeamsService) {

        $scope.oneAtATime = true;
        $scope.teams = TeamsService.getTeams();
        console.log($scope.teams);
        $scope.members = [];
        $scope.regexpAlphanum = /^[A-Za-z0-9 ]+$/;

        $scope.addTeam = function (teamName, isFormValid) {
            if (isFormValid) {
                $scope.teams.push({
                    name: teamName
                });
            }
        };

        $scope.addMember = function () {
            $scope.members.push('Item');
        };

    });