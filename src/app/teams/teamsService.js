'use strict';

angular.module('awesome-app.teams')
    .factory('TeamsService', function (TeamMemberModel, TeamMemberCollection) {

        //normally would get data from datasource but this is for exemplary reasons
        var teamMember1 = new TeamMemberModel('John Smith').addSkill(['JavaScript']),
            teamMember2 = new TeamMemberModel('Jane Kowalsky').addSkill(['Java']),
            teamMember3 = new TeamMemberModel('Joe Doe').addSkill(['.NET']),
            teamMember4 = new TeamMemberModel('James Black').addSkill(['Python']),
            team1 = new TeamMemberCollection('DataArt 1'),
            team2 = new TeamMemberCollection('DataArt 2');

        team1.addMember(teamMember1);
        team1.addMember(teamMember2);
        team2.addMember(teamMember3);
        team2.addMember(teamMember4);

        var teams = [team1, team2];

        var teamsService = {

            getTeams: function () {
                return teams;
            },

            addTeam: function (collection) {
                if (collection instanceof TeamMemberCollection) {
                    teams.push(collection);
                }
            },

            removeTeam: function () {

            },

            teamExists: function () {

            }
        };
        return teamsService;

    });