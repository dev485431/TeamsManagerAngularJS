'use strict';

angular.module('awesome-app.teams')
    .factory('TeamsDataService', function (teamsConf, TeamMemberModel, TeamMemberCollection) {

        var teams = [];
        var teamMembersLimit = teamsConf.teamMembersLimit;

        var teamsDataService = {

            getTeams: function () {
                return teams;
            },

            getTeam: function (teamId) {
                return teams[teamId];
            },

            addTeam: function (collection) {
                if (collection instanceof TeamMemberCollection) {
                    teams.push(collection);
                }
            },

            removeTeam: function (teamId) {
                teams.splice(teamId, 1);
            },

            setTeam: function (teamId, collection) {
                if (collection instanceof TeamMemberCollection) {
                    teams[teamId] = collection;
                }
            },

            teamNameExists: function (teamName) {
                for (var i = 0; i < teams.length; i++) {
                    if (teams[i].getTeamName() === teamName) {
                        return true;
                    }
                }
                return false;
            },

            getTeamMembers: function (teamId) {
                return teams[teamId].getMembers();
            },

            addTeamMember: function (teamId, teamMember) {
                var currentTeam = teams[teamId];
                if (teamMember instanceof TeamMemberModel && currentTeam.getMembers().length < teamMembersLimit) {
                    currentTeam.addMember(teamMember);
                }
            },

            removeTeamMember: function (teamId, memberId) {
                teams[teamId].removeMember(memberId);
            },

            isAlreadyTeamMember: function (teamId, memberId) {
                var teamMembers = teams[teamId].getMembers();
                for (var i = 0; i < teamMembers.length; i++) {
                    if (teamMembers[i].getId() === memberId) {
                        return true;
                    }
                }
                return false;
            }
        };

        return teamsDataService;

    });