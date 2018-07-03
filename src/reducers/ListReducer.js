import {
    UPDATE_LIST,
    CLEAR_LIST,
} from '../actions/types';

const INITIAL_STATE = {
    taskList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_LIST: 
            return { ...state, taskList: action.payload };
        case CLEAR_LIST: 
            return { ...state, taskList: [] };
        default: return { ...state };
    }
};
