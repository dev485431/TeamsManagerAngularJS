'use strict';

angular.module('awesome-app.tabs')
    .controller('SearchCtrl', function ($scope, $filter, StaffDataService, TeamsService, SearchService) {

        $scope.typeheadSortType = 'name';
        $scope.tags = SearchService.getTagsObjects();

        StaffDataService.getStaff()
            .then(function (data) {
                $scope.staffData = data;
            });

        $scope.addTag = function (tagObject) {
            SearchService.addTagObject(tagObject);
        };

        $scope.removeTag = function (tagObject) {
            SearchService.removeTagObject(tagObject.id);
        };

        $scope.addToTeam = function () {
            SearchService.addToTeam($scope.tags);
            $scope.tags = SearchService.getTagsObjects();
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

    });