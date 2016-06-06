'use strict';

angular.module('awesome-app.tabs')
    .controller('SearchCtrl', function ($scope, $filter, StaffDataService) {

        $scope.typeheadSort = 'name';

        $scope.addTag = function (item) {
            console.log('Adding tag: ' + item);
        };

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
            results = $filter('orderBy')(results, $scope.typeheadSort);
            return results;
        };

    });