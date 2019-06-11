import { connect } from 'react-redux';
import TodoList from '../components/todo-list';
import { bindActionCreators } from 'redux'
import { actions} from '../actions/actions';
import { getItemsCount, getRemoveButton, getFilterItems } from '../selectors/selector';

const mapStateToProps = state => ({
	itemsCount: getItemsCount(state),
	removeButton: getRemoveButton(state),
	items: getFilterItems(state)
});
const mapDispatchToProps = dispatch => bindActionCreators({
	changeItemStatus: actions.changeItemStatus, 
	deleteItem: actions.deleteItem, 
	deleteCompleted: actions.deleteCompleted
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)