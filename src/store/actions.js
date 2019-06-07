export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';
export const CHANGE_ITEM_STATUS = 'CHANGE_ITEM_STATUS';
export const CHANGE_FILTER = 'CHANGE_FILTER'; 

export const addItem = (value) =>({
    type: ADD_ITEM,
    payload: value
})

export const deleteItem = (value) =>({
    type: DELETE_ITEM,
    payload: value
})
export const deleteCompleted = (value) =>({
    type: DELETE_COMPLETED,
    payload: value
})

export const changeItemStatus = (value) =>({
    type: CHANGE_ITEM_STATUS,
    payload: value
})

export const changeFilter = (value) =>({
    type: CHANGE_FILTER,
    payload: value
})