import {createStore} from 'redux';
// import { ADD_FOOD } from 'const'
import plainHtmlReducer from 'redux/reducer/plainHtmlReducer';
const initState = {plain: {a: 1}};

function rootReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_FOOD':
            return 
        default:
            return state;
            break;
    }
}

export default createStore(rootReducer);