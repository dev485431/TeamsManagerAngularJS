'use strict';

var SearchCtrl = function ($scope, $filter, searchConf, StaffDataService, TeamsService, SearchService, TeamsDataService) {
    var _this = this;
    _this.init($scope, searchConf, StaffDataService, TeamsService, TeamsDataService, SearchService);

    $scope.addTag = function (tagObject) {
        _this.addTag(tagObject, SearchService);
    };

    $scope.removeTag = function (tagObject) {
        _this.removeTag(tagObject, SearchService);
    };

    $scope.refresh = function () {
        _this.refresh($scope, SearchService);
    };

    $scope.setRefreshButtonStatus = function () {
        return _this.setRefreshButtonStatus(TeamsService, SearchService);
    };

    $scope.matchAnyWords = function (searchText) {
        return _this.matchAnyWords(searchText, $scope, $filter);
    };
};

SearchCtrl.prototype = function () {
    var init = function ($scope, searchConf, StaffDataService, TeamsService, TeamsDataService, SearchService) {
            $scope.autoCompleteSortType = searchConf.defaultAutoCompleteSortType;
            $scope.staffData = [];
            $scope.tags = [];

            getData(StaffDataService)
                .then(function (data) {
                    $scope.staffData = data;
                });

            addSelectedTeamListener($scope, TeamsService, SearchService);
            addSelectedTeamMembersListener($scope, TeamsService, TeamsDataService, SearchService);
        },

        getData = function (StaffDataService) {
            return StaffDataService.getStaff();
        },

        addTag = function (tagObject, SearchService) {
            SearchService.addTagObject(tagObject);
        },

        removeTag = function (tagObject, SearchService) {
            SearchService.removeTagObject(tagObject.id);
        },

        refresh = function ($scope, SearchService) {
            SearchService.addToTeam($scope.tags);
        },

        setRefreshButtonStatus = function (TeamsService, SearchService) {
            var disabled = true,
                currentTeam = TeamsService.getSelectedTeam(),
                currentTags = SearchService.getTagsObjects();

            if (currentTags.length > 0 && currentTeam !== undefined) {
                disabled = false;
            }
            console.log(disabled);
            return disabled;
        },

        matchAnyWords = function (searchText, $scope, $filter) {
            var results = $scope.staffData;
            var searchWordsArray = searchText ? searchText.toLowerCase().split(/\s+/) : [];
            for (var i = 0; i < searchWordsArray.length; i++) {
                results = $filter('filter')(results, searchWordsArray[i]);
            }
            results = sortResults(results, $scope.autoCompleteSortType, $filter);
            return results;
        },

        sortResults = function (results, orderBy, $filter) {
            return $filter('orderBy')(results, orderBy);
        },

        addSelectedTeamListener = function ($scope, TeamsService, SearchService) {
            $scope.$watch(function () {
                return getSelectedTeamState(TeamsService);
            }, function () {
                $scope.tags = SearchService.getTagsObjects();
            });
        },

        addSelectedTeamMembersListener = function ($scope, TeamsService, TeamsDataService, SearchService) {
            $scope.$watchCollection(function () {
                return getTeamMembersState(TeamsService, TeamsDataService);
            }, function () {
                $scope.tags = SearchService.getTagsObjects();
            });
        },

        getSelectedTeamState = function (TeamsService) {
            return TeamsService.getSelectedTeam();
        },

        getTeamMembersState = function (TeamsService, TeamsDataService) {
            var currentTeam = TeamsService.getSelectedTeam();
            if (currentTeam !== undefined) {
                return TeamsDataService.getTeamMembers(TeamsService.getSelectedTeam());
            }
            return [];
        };

    return {
        init: init,
        addTag: addTag,
        removeTag: removeTag,
        refresh: refresh,
        setRefreshButtonStatus: setRefreshButtonStatus,
        matchAnyWords: matchAnyWords
    };

}();

SearchCtrl.$inject = ['$scope', '$filter', 'searchConf', 'StaffDataService', 'TeamsService', 'SearchService', 'TeamsDataService'];

angular.module('awesome-app.tabs')
    .controller('SearchCtrl', SearchCtrl);
