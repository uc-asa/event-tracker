
import { KEY } from '@config';
import { evList } from './event';

export const  initialState = {
    list: evList,
    currentUser: null,
    userEvents: []
};

//REDUCER
const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case KEY.SET_DATA: {
            const { ev = [] } = action;
            return {...state, userEvents: ev};
        }
        case SET_USER: {
            return {...state};
        }

        default:
            return state;
    }
};

export default eventReducer;