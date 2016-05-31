'use strict';

angular.module('awesome-app.tabs')
    .controller('ListCtrl', function ($scope, $filter, StaffService) {

        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.maxSize = 6;
        $scope.boundaryLinks = true;

        $scope.sortType = 'name';
        $scope.sortReverse = false;
        $scope.searchTerm = '';

        StaffService.getStaff()
            .then(function (data) {
                $scope.totalItems = data.length;

                $scope.$watch('currentPage + searchTerm + sortReverse + itemsPerPage', function () {
                    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;

                    var sortedData = $filter('orderBy')(data, $scope.sortType, $scope.sortReverse);
                    var filteredData = $filter('filter')(sortedData, $scope.searchTerm);
                    $scope.totalItems = filteredData.length || sortedData.length;
                    $scope.pageData = filteredData.slice(begin, end);
                });

            });

    });