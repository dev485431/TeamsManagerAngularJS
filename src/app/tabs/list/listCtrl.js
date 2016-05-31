'use strict';

angular.module('awesome-app.tabs')
    .controller('ListCtrl', function ($scope, StaffService) {

        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.maxSize = 8;
        $scope.boundaryLinks = true;

        $scope.sortType     = 'name';
        $scope.sortReverse  = false;
        $scope.searchTerm   = '';



        StaffService.getStaff()
            .then(function (data) {
                $scope.totalItems = data.length;

                $scope.$watch('currentPage + itemsPerPage', function () {
                    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;

                    $scope.pageData = data.slice(begin, end);
                });
            });

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };



    });