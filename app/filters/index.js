import angular from 'angular';

import l33t from './l33t';

const filters = angular.module('filters', [])
    .filter('l33t', () => l33t);

export default filters.name;
