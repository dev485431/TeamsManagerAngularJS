'use strict';

angular.module('awesome-app.tabs')
    .factory('StaffDataService', function ($http, TeamMemberModel) {

        var dataUrl = 'src/common/datasource/staff.json.js',
            loadErrMsg = 'Error while loading data',
            rawStaffData,
            staffMapById;

        var staffService = {
            getStaff: function () {
                var def = $q.defer();
                if (rawStaffData) {
                    def.resolve(rawStaffData);
                } else {
                    $http.get(dataUrl)
                        .success(function (data) {
                            rawStaffData = data;
                            def.resolve(data);
                        })
                        .error(function () {
                            def.reject(loadErrMsg);
                        });
                }
                return def.promise;
            },

            getEmployeeById: function (employeeId) {
                if (staffMapById === undefined) {
                    staffMapById = mapEmployeesById();
                    return staffMapById[employeeId];
                } else {
                    return staffMapById[employeeId];
                }
            }
        };

        var mapEmployeesById = function () {
            var employeesById = {};
            for (var i = 0; i < rawStaffData.length; i++) {
                var employee = rawStaffData[i];
                employeesById[rawStaffData[i].id] = new TeamMemberModel(employee.id, employee.name, employee.age, employee.grade, employee.job);
            }
            return employeesById;
        };

        return staffService;

    });