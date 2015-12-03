import di from '../../util/di';
import { addMessage } from '../../store/messages';

class Link {

    constructor (scope) {

        scope.message = '';

        let unsubscribe = di('$ngRedux').connect(null, { addMessage })(scope);

        scope.addMessageWrapper = function (message) {

            if (scope.message) {

                scope.addMessage(message);
                scope.message = '';
            }
        };

        scope.$on('$destroy', unsubscribe);
    }
}

export default Link;
