'use strict';

var TeamsCtrl = function ($scope, teamsConf, TeamsDataService, SearchService, TeamsService, TeamMemberCollection) {
    var _this = this;
    _this.init($scope, teamsConf, TeamsDataService);

    $scope.addTeam = function (teamName, isFormValid) {
        return _this.addTeam(teamName, isFormValid, $scope, TeamsDataService, TeamMemberCollection);
    };

    $scope.removeTeam = function () {
        return _this.removeTeam(TeamsService, TeamsDataService);
    };

    $scope.setSelectedTeam = function (index) {
        return _this.setSelectedTeam(index, TeamsService);
    };

    $scope.removeTeamMember = function (memberId) {
        return _this.removeTeamMember(memberId, TeamsService, TeamsDataService, SearchService);
    };

};

TeamsCtrl.prototype = function () {
    var init = function ($scope, teamsConf, TeamsDataService) {
            $scope.teams = TeamsDataService.getTeams();
            $scope.teamsLimit = teamsConf.teamsLimit;
            $scope.teamMembersLimit = teamsConf.teamMembersLimit;
            $scope.oneAccordionAtATime = teamsConf.oneAccordionAtATime;
            $scope.regexpAlphanum = teamsConf.regexpAlphanum;
        },

        addTeam = function (teamName, isFormValid, $scope, TeamsDataService, TeamMemberCollection) {
            var currentTeams = TeamsDataService.getTeams();
            if (isFormValid && currentTeams.length < $scope.teamsLimit) {
                TeamsDataService.addTeam(new TeamMemberCollection(teamName));
                $scope.teamName = null;
            }
        },

        removeTeam = function (TeamsService, TeamsDataService) {
            var selectedTeamId = TeamsService.getSelectedTeam();
            TeamsDataService.removeTeam(selectedTeamId);
            TeamsService.setSelectedTeam(undefined);
        },

        setSelectedTeam = function (index, TeamsService) {
            TeamsService.setSelectedTeam(index);
        },

        removeTeamMember = function (memberId, TeamsService, TeamsDataService, SearchService) {
            var selectedTeamId = TeamsService.getSelectedTeam();
            TeamsDataService.removeTeamMember(selectedTeamId, memberId);
            SearchService.removeTagObject(memberId);
        };


    return {
        init: init,
        addTeam: addTeam,
        removeTeam: removeTeam,
        setSelectedTeam: setSelectedTeam,
        removeTeamMember: removeTeamMember
    };

}();

TeamsCtrl.$inject = ['$scope', 'teamsConf', 'TeamsDataService', 'SearchService', 'TeamsService', 'TeamMemberCollection'];

angular.module('awesome-app.teams')
    .controller('TeamsCtrl', TeamsCtrl);
