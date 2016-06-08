'use strict';

angular.module('awesome-app.tabs')
    .factory('SearchService', function (TeamMemberModel, TeamMemberCollection, TeamsService, TeamsDataService) {

        var tagsObjects = [];

        var searchService = {

            getTagsObjects: function () {
                return tagsObjects;
            },

            addTagObject: function (tagObject) {
                if (tagObject instanceof TeamMemberModel) {
                    tagsObjects.push(tagObject);
                }
            },

            removeTagObject: function (tagObjectId) {
                for (var i = 0; i < tagsObjects.length; i++) {
                    if (tagsObjects[i].id === tagObjectId) {
                        tagsObjects.splice(i, 1);
                        break;
                    }
                }
            },

            addToTeam: function (tagObjects) {
                for (var i = 0; i < tagObjects.length; i++) {
                    var currentTagObject = tagObjects[i],
                        currentTagObjectId = currentTagObject.id,
                        selectedTeamId = TeamsService.getSelectedTeam();

                    if (!TeamsDataService.isAlreadyTeamMember(selectedTeamId, currentTagObjectId)) {
                        var addedEmployee = new TeamMemberModel(currentTagObject.id, currentTagObject.name, currentTagObject.age, currentTagObject.grade, currentTagObject.job);
                        TeamsDataService.addTeamMember(selectedTeamId, addedEmployee);
                    }
                }
            },

            refresh: function (tagObjects) {
                var teamMembersFromTags = [];
                var selectedTeamId = TeamsService.getSelectedTeam();

                for (var i = 0; i < tagObjects.length; i++) {
                    var currentTagObject = tagObjects[i];
                    var newTeamMember = new TeamMemberModel(currentTagObject.id, currentTagObject.name, currentTagObject.age, currentTagObject.grade, currentTagObject.job);
                    teamMembersFromTags.push(newTeamMember);
                }
                TeamsDataService.setTeamMembers(selectedTeamId, teamMembersFromTags);
            },

        };
        return searchService;

    });