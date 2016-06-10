'use strict';

var TabsCtrl = function ($scope, $state, tabsConf) {

    $scope.tabs = [
        tabsConf.searchTab,
        tabsConf.listTab,
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

};

TabsCtrl.$inject = ['$scope', '$state', 'tabsConf'];

angular.module('awesome-app.tabs')
    .controller('TabsCtrl', TabsCtrl);
