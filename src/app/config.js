'use strict';

angular.module('awesome-app.config')
    .constant('teamsConf', {
        teamsLimit: 50,
        teamMembersLimit: 25
    })
    .constant('listConf', {
        itemsPerPage: 10,
        paginationMaxSize: 6,
        showBoundaryLinks: true,
        defaultSortType: 'name'
    });
