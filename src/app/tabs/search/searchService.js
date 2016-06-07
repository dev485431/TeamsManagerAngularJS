'use strict';

angular.module('awesome-app.tabs')
    .factory('SearchService', function (TeamMemberModel) {

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
            }

        };
        return searchService;

    });