'use strict';

angular.module('awesome-app.tabs')
    .controller('TabsCtrl', function ($scope, $state) {

        $scope.tabs = [
            {heading: "Search", route: "home.tabs.search", active: true},
            {heading: "List", route: "home.tabs.list", active: false},
        ];

        $scope.go = function (route) {
            $state.go(route);
        };

        $scope.active = function (route) {
            return $state.is(route);
        };

        $scope.$on("$stateChangeSuccess", function () {
            $scope.tabs.forEach(function (tab) {
                tab.active = $scope.active(tab.route);
            });
        });

    });
