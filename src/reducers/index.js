// khai bao reducres va combi
import * as types from '../constants/ActionTypes';

var oldState = {
    status: false
}

var reducer1 = (state=oldState, action) => {
    switch (action.type) {
        case types.TOGGLE_STATUS:
            return {...state, status:!state.status};
    }
    return state;
}

export default reducer1;