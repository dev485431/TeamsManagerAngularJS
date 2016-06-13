'use strict';

angular.module('awesome-app.config')
    .constant('teamsConf', {
        teamsLimit: 50,
        teamMembersLimit: 25,
        oneAccordionAtATime: true,
        regexpAlphanum: /^[A-Za-z0-9 ]+$/
    })
    .constant('tabsConf', {
        searchTab: {
            heading: "Search",
            route: "home.tabs.search",
            active: true
        },
        listTab: {
            heading: "List",
            route: "home.tabs.list",
            active: false
        }
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
