'use strict';

angular.module('awesome-app.config', []);
angular.module('awesome-app.home', ['ui.router']);
angular.module('awesome-app.tabs', ['ui.router', 'ui.bootstrap', 'awesome-app.config']);
angular.module('awesome-app.teams', ['ui.router', 'ui.bootstrap', 'awesome-app.config']);