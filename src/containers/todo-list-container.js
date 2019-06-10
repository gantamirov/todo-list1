import { connect } from 'react-redux';
import TodoList from '../components/todo-list';
import { changeItemStatus, deleteItem, deleteCompleted } from '../consts/actions';
import { getItemsCount, getRemoveButton, getFilterItems } from '../selectors/selector';

const mapStateToProps = state => ({
	itemsCount: getItemsCount(state),
	removeButton: getRemoveButton(state),
	items: getFilterItems(state)
});

export default connect(mapStateToProps, { changeItemStatus, deleteItem, deleteCompleted })(TodoList)