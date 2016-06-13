'use strict';

angular.module('awesome-app.config')
    .constant('teamsConf', {
        teamNameLengthMax: 33,
        teamsLimit: 50,
        teamMembersLimit: 25,
        oneAccordionAtATime: true,
        regexpAlphanum: /^[A-Za-z0-9 ]+$/,
        msgNameTaken: 'This team name is taken',
        msgLatinCharsOnly: 'Use only latin letters, numbers and spaces',
        msgMaxLength: 'Characters limit:'
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
