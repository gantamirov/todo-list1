import { handleActions } from 'redux-actions'
import { actions } from '../actions/actions'

export const initialState = {
	items: [],
	filter: 0
};

const reducer = handleActions({
	[actions.addItem]:(state, { payload: { payload } }) => ({
		...state,
		items: [...state.items, payload]
	}),
	
	[actions.deleteItem]:(state, { payload: { payload } }) => ({
		...state,
		items: state.items.filter(item => (item !== payload))
	}),

	[actions.deleteCompleted]:(state, { payload: { payload } }) => ({
		...state,
		items: state.items.filter(item => (!item.completed))
	}),

	[actions.changeItemStatus]:(state, { payload: { payload } }) => ({
		...state,
		items:state.items.map(item => (item.id === payload.id ? {...item, completed: !payload.completed} : item))
	}),

	[actions.changeFilter]:(state, { payload: { payload } }) => ({
		...state,
		filter: payload,
	})
}, initialState)

export default reducer;