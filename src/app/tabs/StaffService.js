'use strict';

angular.module('awesome-app.tabs')
    .factory('StaffService', function () {

        var selectedEmployee;

        var staffService = {

            getSelectedEmployee: function () {
                return selectedEmployee;
            },

            setSelectedEmployee: function (employeeId) {
                selectedEmployee = employeeId;
            }

        };
        return staffService;

    });