'use strict';

angular.module('awesome-app.teams')
    .directive('uniquename', function (TeamsService) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.uniqueName = function (viewValue) {
                    if (TeamsService.teamNameExists(viewValue)) {
                        return false;
                    }
                    return true;
                };
            }
        };
    });