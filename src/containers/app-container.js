import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import App from '../App';
import { actions } from '../actions/actions';
import { getItems, getFilter } from '../selectors/selector';

const mapStateToProps = (state) => ({
	items: getItems(state),
	filter: getFilter(state)
});
const mapDispatchToProps =  dispatch => bindActionCreators({
	addItem: actions.addItem,
	changeFilter: actions.changeFilter
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)