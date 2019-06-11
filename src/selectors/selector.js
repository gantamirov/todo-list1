import { createSelector } from "reselect";

export const getItems = (state) => state.items;
export const getFilter = (state) => state.filter;

export const getRemoveButton = createSelector(
	[getItems],
	(items) => (
		items.find(item => (item.completed))
	)
);

export const getFilterItems = createSelector(
	[getItems, getFilter], 
	(items, filter )=> (
		items.filter(item => (
			(filter === 0 || (filter===1 && item.completed) || (filter===2 && !item.completed)) ? item :null))
	)
);

export const getItemsCount = createSelector(
	[getFilterItems],
	(items) => (items.length)
);