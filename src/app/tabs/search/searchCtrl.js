'use strict';

angular.module('awesome-app.tabs')
    .controller('SearchCtrl', function ($scope, $filter, StaffDataService, TeamsService, SearchService, TeamsDataService) {

        $scope.typeheadSortType = 'name';
        $scope.tags = [];

        StaffDataService.getStaff()
            .then(function (data) {
                $scope.staffData = data;
            });

        $scope.$watch(function() { return getSelectedTeamState(); }, function () {
            $scope.tags = SearchService.getTagsObjects();
        });

        $scope.$watchCollection(function () { return getTeamMembersState(); }, function () {
            $scope.tags = SearchService.getTagsObjects();
        });

        $scope.addTag = function (tagObject) {
            SearchService.addTagObject(tagObject);
        };

        $scope.removeTag = function (tagObject) {
            SearchService.removeTagObject(tagObject.id);
        };

        $scope.refresh = function () {
            SearchService.addToTeam($scope.tags);
        };

        $scope.setRefreshButtonStatus = function () {
            var disabled = true,
                currentTeam = TeamsService.getSelectedTeam(),
                currentTags = SearchService.getTagsObjects();

            if (currentTags.length > 0 && currentTeam !== undefined) {
                disabled = false;
            }
            return disabled;
        };

        $scope.matchAnyWords = function (searchText) {
            var results = $scope.staffData;
            var searchWordsArray = searchText ? searchText.toLowerCase().split(/\s+/) : [];
            for (var i = 0; i < searchWordsArray.length; i++) {
                results = $filter('filter')(results, searchWordsArray[i]);
            }
            results = sortResults(results, $scope.typeheadSortType);
            return results;
        };

        var sortResults = function (results, orderBy) {
            return $filter('orderBy')(results, orderBy);
        };

        var getSelectedTeamState = function () {
            return TeamsService.getSelectedTeam();
        };

        var getTeamMembersState = function() {
            console.log('getting state');
            var currentTeam = TeamsService.getSelectedTeam();
            if (currentTeam !== undefined) {
                return TeamsDataService.getTeamMembers(TeamsService.getSelectedTeam());
            }
            return [];
        };

    });