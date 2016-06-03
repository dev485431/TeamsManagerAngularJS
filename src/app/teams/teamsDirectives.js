'use strict';

angular.module('awesome-app.teams')
    .directive('uniquename', function (TeamsService) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                scope.$watch(function () {
                    if (TeamsService.teamNameExists(ctrl.$viewValue)) {
                        ctrl.$setValidity('uniquename', false);
                    } else {
                        ctrl.$setValidity('uniquename', true);
                    }
                });

            }
        };
    });