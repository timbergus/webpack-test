const ADD = 'my-app/message/ADD';

export function addMessage (message) {
    return { type: ADD, content: message }
}

export default function reducer (state = [], action = {}) {

    switch (action.type) {
        case ADD:
            state.push(action.content);
            return state;
        default:
            return state;
    }
};
