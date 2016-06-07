'use strict';

angular.module('awesome-app.tabs')
    .controller('SearchCtrl', function ($scope, $filter, StaffDataService) {

        $scope.typeheadSortType = 'name';
        $scope.tags = [];

        StaffDataService.getStaff()
            .then(function (data) {
                $scope.staffData = data;
            });

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