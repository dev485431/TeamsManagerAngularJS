'use strict';

angular.module('awesome-app.config')
    .constant('teamsConf', {
        teamsLimit: 50,
        teamMembersLimit: 25
    })
    .constant('listConf', {
        paginationItemsPerPage: 10,
        paginationMaxSize: 6,
        showPaginationBoundaryLinks: true,
        defaultListSortType: 'name'
    })
    .constant('searchConf', {
        defaultAutoCompleteSortType: 'name'
    });
