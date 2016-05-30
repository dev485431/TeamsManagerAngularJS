angular.module('awesome-app.common.services')
    .factory('StaffService', function ($http) {

        var dataUrl = 'src/common/datasource/staff.json.js',

            staffService = {
                getStaff: function () {
                    var promise = $http.get(dataUrl).then(function (response) {
                        return response.data;
                    });

                    return promise;
                }
            };
        return staffService;

    });