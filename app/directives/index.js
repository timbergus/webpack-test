import angular from 'angular';

import infoBox from './info-box';
import inputBox from './input-box';

const directives = angular.module('directives', [])
    .directive('infoBox', () => infoBox)
    .directive('inputBox', () => inputBox);

export default directives.name;
