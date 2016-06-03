'use strict';

angular.module('awesome-app.teams')
    .directive('uniquename', function (TeamsDataService) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                scope.$watch(function () {
                    if (TeamsDataService.teamNameExists(ctrl.$viewValue)) {
                        ctrl.$setValidity('uniquename', false);
                    } else {
                        ctrl.$setValidity('uniquename', true);
                    }
                });

            }
        };
    });