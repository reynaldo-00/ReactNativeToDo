import {
    UPDATE_LIST,
    CLEAR_LIST,
} from '../actions/types';

export const updateList = (taskList) => {
    return {
        type: UPDATE_LIST,
        payload: taskList,
    };
};

export const clearList = () => {
    return {
        type: CLEAR_LIST
    };
};
