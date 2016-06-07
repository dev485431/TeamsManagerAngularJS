'use strict';

angular.module('awesome-app.tabs')
    .controller('SearchCtrl', function ($scope, $filter, StaffDataService) {

        $scope.typeheadSortType = 'name';

        $scope.addTag = function (item) {
            console.log(item);
        };

        $scope.tags = [
            {text: 'just'},
            {text: 'some'},
            {text: 'cool'},
            {text: 'tags'}
        ];

        $scope.loadTags = function(query) {
            return [
                {text: 'just'},
                {text: 'some'},
                {text: 'cool'},
                {text: 'tags'}
            ];
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
            results = $filter('orderBy')(results, $scope.typeheadSortType);
            return results;
        };

    });