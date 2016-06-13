'use strict';

angular.module('awesome-app.config', []);
angular.module('awesome-app.home', ['ui.router']);
angular.module('awesome-app.tabs', ['ui.router', 'ui.bootstrap', 'awesome-app.config']);
angular.module('awesome-app.teams', ['ui.router', 'ui.bootstrap', 'awesome-app.config']);

angular.module('awesome-app.common.components.footer', []);
angular.module('awesome-app.common.components.header', []);
angular.module('awesome-app.common.components.version', []);
angular.module('awesome-app.common.components', [
    'awesome-app.common.components.header',
    'awesome-app.common.components.footer',
    'awesome-app.common.components.version'
]);

angular.module('awesome-app.common', [
    'awesome-app.common.features',
    'awesome-app.common.components'
]);

angular.module('awesome-app.common.features', [
    'awesome-app.common.features.abstract-entity',
    'awesome-app.common.features.team-member'
]);