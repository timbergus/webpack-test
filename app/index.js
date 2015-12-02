'use strict';

import angular from 'angular';
import router from 'angular-ui-router';

// Redux

import ngRedux from 'ng-redux';
import reducer from './store/index';
import thunk from 'redux-thunk';

let middleware = [thunk];

import Home from './states/home';

import filters from './filters';
import directives from './directives';

const providers = ['$stateProvider', '$urlRouterProvider', '$ngReduxProvider'];

angular.module('myApp', [router, filters, directives, ngRedux])
    .config([...providers, (state, router, redux) => {

        state
            .state('home', Home);

        router.otherwise('/');

        redux.createStoreWith(reducer, middleware);
    }]);
