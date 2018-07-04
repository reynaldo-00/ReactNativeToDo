import {
    UPDATE_LIST,
    CLEAR_LIST,
    UPDATE_EDIT_MODE,
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

export const updateTask = (itemIndex, newTaskText, taskList) => {
    const updatedList = taskList;
    const newTask = { text: newTaskText, count: (Math.random() * 100) + 1 };

    updatedList[itemIndex] = newTask;

    return {
        type: UPDATE_LIST,
        payload: updatedList
    };
};

export const deleteTask = (itemIndex, taskList) => {
    const updatedList = taskList;

    updatedList.splice(itemIndex, 1);

    return {
        type: UPDATE_LIST,
        payload: updatedList
    };
};

export const updateEditMode = (update) => {
    return {
        type: UPDATE_EDIT_MODE,
        payload: update,
    };
};

