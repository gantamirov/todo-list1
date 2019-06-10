import * as consts from '../consts/consts';


export const initialState = {
	items: [],
	filter: 0
};

const reducer = (state = initialState, action) => { 
	switch (action.type) {
		case consts.ADD_ITEM: {
			return {
				...state,
				items: [...state.items, action.payload],
			}
		}
		case consts.DELETE_ITEM: {
			return {
				...state,
				items: state.items.filter(item => (item !== action.payload))
			}
		}
		case consts.DELETE_COMPLETED: {
			return {
				...state,
				items: state.items.filter(item => (!item.completed))
			}
		}
		case consts.CHANGE_ITEM_STATUS: {
			return {
				...state,
				items:state.items.map(item => (item.id === action.payload.id ? {...item, completed: !action.payload.completed} : item))
			}
		}
		case consts.CHANGE_FILTER: {
			return {
				...state,
				filter: action.payload,
			}
		}
		default:
			return state
	}
	
	
};

export default reducer;