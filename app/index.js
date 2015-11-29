'use strict';

import angular from 'angular';
import router from 'angular-ui-router';

import Home from './states/home';

import filters from './filters';
import directives from './directives';

angular.module('myApp', [router, filters, directives])
    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider
            .state('home', Home);

        $urlRouterProvider.otherwise('/');
    });
