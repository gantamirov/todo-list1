import { connect } from 'react-redux';
import App from '../App';
import { changeFilter, addItem } from '../consts/actions';
import { getItems, getFilter } from '../selectors/selector';

const mapStateToProps = (state) => ({
	items: getItems(state),
	filter: getFilter(state)
});

export default connect(mapStateToProps, { changeFilter, addItem })(App)