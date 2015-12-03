import { incrementCounter, decrementCounter } from '../../store/counter';

class Controller {

    static mapStateToThis(state) {
        return {
            count: state.counter,
            messages: state.messages
        };
    }

    constructor ($scope, $ngRedux) {

        this.content = 'Lorem ipsum dolor sit amet.';

        let unsubscribe = $ngRedux.connect(Controller.mapStateToThis, { incrementCounter, decrementCounter })(this);
        $scope.$on('$destroy', unsubscribe);
    }
}

export default Controller;
