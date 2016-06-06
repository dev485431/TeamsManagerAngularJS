'use strict';

angular.module('awesome-app.teams')
    .factory('TeamsDataService', function (TeamMemberModel, TeamMemberCollection) {

        var teams = [];

        var teamsDataService = {

            getTeams: function () {
                return teams;
            },

            addTeam: function (collection) {
                if (collection instanceof TeamMemberCollection) {
                    teams.push(collection);
                }
            },

            removeTeam: function (teamId) {
                teams.splice(teamId, 1);
            },

            teamNameExists: function (teamName) {
                for (var i = 0; i < teams.length; i++) {
                    if (teams[i].getTeamName() === teamName) {
                        return true;
                    }
                }
                return false;
            },

            addTeamMember: function (teamId, teamMember) {
                if (teamMember instanceof TeamMemberModel) {
                    teams[teamId].addMember(teamMember);
                }
            },

            removeTeamMember: function (teamId, memberId) {
                teams[teamId].removeMember(memberId);
            }

        };
        return teamsDataService;

    });