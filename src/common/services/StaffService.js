angular.module('awesome-app.common.services')
    .factory('StaffService', function ($http) {

        var staffService = {
            getStaff: function () {
                var promise = $http.get('src/common/datasource/staff.json.js').then(function (response) {
                    console.log(response);
                    return response.data;
                });

                return promise;
            }
        };
        return staffService;

    });