import Style from './style.styl';
import Controller from './controller';
import Template from './template.jade';

export default {
    url          : '/',
    template     : Template({}),
    controllerAs : 'home',
    controller   : () => new Controller()
};