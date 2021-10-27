import {createStore} from 'redux';
import cons from 'const'

const initState = {
    foodList: []
};

function reducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_FOOD':
            let foodList = [...state.foodList, action.data.foodName];
            return {...state, foodList};
        default:
            return state;
            break;
    }
}

export default createStore(reducer);