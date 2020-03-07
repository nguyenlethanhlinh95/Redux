import * as types from '../constants/ActionTypes';
import reducer1 from '../reducers/index';

var redux = require('redux');

var store1 = redux.createStore(reducer1);
console.log(store1.getState());

store1.dispatch(types.TOGGLE_STATUS);

console.log(store1.getState());
