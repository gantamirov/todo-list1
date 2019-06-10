import reducer, { initialState } from '../reducers/reducer';
import { createStore } from "redux";

const store = createStore(reducer, initialState);

export default store