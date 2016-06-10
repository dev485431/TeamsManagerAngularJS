'use strict';

angular.module('awesome-app.teams')
    .factory('TeamsService', function () {

        var selectedTeam;

        var teamsService = {

            getSelectedTeam: function () {
                return selectedTeam;
            },

            setSelectedTeam: function (teamId) {
                selectedTeam = teamId;
            }

        };
        
        return teamsService;

    });