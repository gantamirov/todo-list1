import { createActions } from 'redux-actions'

export const actions = createActions({
	addItem: (value) => ({
			payload: value
		}),
	deleteItem: (value) => ({
		payload: value
	}),
	deleteCompleted: (value) => ({
		payload: value
	}),
	changeItemStatus: (value) => ({
		payload: value
	}),
	changeFilter: (value) => ({
		payload: value
	})
})