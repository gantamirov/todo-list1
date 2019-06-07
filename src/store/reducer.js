import * as actions from './actions'


export const initialState = {
    items: [],
    status: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_ITEM: {
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        }
        case actions.DELETE_ITEM: {
            return {
                ...state,
                items: state.items.filter(item=>(item!==action.payload ? item :null ))
            }
        }
        case actions.DELETE_COMPLETED: {
            return {
                ...state,
                items: state.items.filter(item=>(item.completed ? null : item ))
            }
        }
        case actions.CHANGE_ITEM_STATUS: {
            return {
                ...state,
                items:state.items.map(item =>(item.id === action.payload.id ? {...item, completed: !action.payload.completed} : item))
            }
        }
        case actions.CHANGE_FILTER: {
            return {
                ...state,
                status: action.payload,
            }
        }
    }
    return state
    
};

export default reducer;