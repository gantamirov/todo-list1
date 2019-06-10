import * as consts from './consts';

export const addItem = (value) => ({
	type: consts.ADD_ITEM,
	payload: value
})

export const deleteItem = (value) => ({
	type: consts.DELETE_ITEM,
	payload: value
})

export const deleteCompleted = (value) => ({
	type: consts.DELETE_COMPLETED,
	payload: value
})

export const changeItemStatus = (value) => ({
	type: consts.CHANGE_ITEM_STATUS,
	payload: value
})

export const changeFilter = (value) => ({
	type: consts.CHANGE_FILTER,
	payload: value
})