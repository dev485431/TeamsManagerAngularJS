'use strict';

angular.module('awesome-app.tabs')
    .controller('ListCtrl', function ($scope, $filter, StaffDataService, StaffService, TeamsDataService, TeamsService) {

        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.maxSize = 6;
        $scope.boundaryLinks = true;

        $scope.sortType = 'name';
        $scope.sortReverse = false;
        $scope.searchTerm = '';

        StaffDataService.getStaff()
            .then(function (data) {
                processData(data);
            });

        $scope.setSelectedEmployee = function (employeeId) {
            StaffService.setSelectedEmployee(employeeId);
        };

        $scope.setAddButtonStatus = function () {
            var disabled = true,
                currentTeam = TeamsService.getSelectedTeam(),
                currentEmployee = StaffService.getSelectedEmployee();

            if (currentEmployee !== undefined && currentTeam !== undefined) {
                if (!TeamsDataService.isAlreadyTeamMember(currentTeam, currentEmployee)) {
                    disabled = false;
                }
            }
            return disabled;
        };

        $scope.addTeamMember = function (employeeId) {
            var employee = StaffDataService.getEmployeeById(employeeId),
                selectedTeamId = TeamsService.getSelectedTeam();
            TeamsDataService.addTeamMember(selectedTeamId, employee);
        };

        var processData = function (data) {
            $scope.totalItems = data.length;

            $scope.$watch('currentPage + searchTerm + sortReverse + itemsPerPage', function () {
                var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                    end = begin + $scope.itemsPerPage;

                var sortedData = $filter('orderBy')(data, $scope.sortType, $scope.sortReverse);
                var filteredData = $filter('filter')(sortedData, $scope.searchTerm);
                $scope.totalItems = filteredData.length || sortedData.length;
                $scope.pageData = filteredData.slice(begin, end);
            });
        };

    });