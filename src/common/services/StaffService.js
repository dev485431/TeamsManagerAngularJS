angular.module('awesome-app.common.services')
    .factory('StaffService', function ($http) {

        var dataUrl = 'src/common/datasource/staff.json.js',

            staffService = {
                getStaff: function () {
                    var promise = $http.get(dataUrl).then(function (response) {
                        console.log(response.data);
                        return response.data;
                    });

                    return promise;
                }
            };
        return staffService;

    });