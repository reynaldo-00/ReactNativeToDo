import {
    UPDATE_LIST,
    CLEAR_LIST,
    UPDATE_EDIT_MODE,
} from '../actions/types';

const INITIAL_STATE = {
    taskList: [],
    editMode: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_LIST: 
            return { ...state, taskList: action.payload };
        case CLEAR_LIST: 
            return { ...state, taskList: [] };
        case UPDATE_EDIT_MODE: 
            return { ...state, editMode: action.payload };
        default: return { ...state };
    }
};
