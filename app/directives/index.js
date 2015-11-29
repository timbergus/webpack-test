import angular from 'angular';

import infoBox from './info-box';

const directives = angular.module('directives', [])
    .directive('infoBox', () => infoBox);

export default directives.name;
