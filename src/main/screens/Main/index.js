import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { myApiWatcher } from '../../store/actions';
import Main from './Main';

function mapStateToProps({ myApiReducer }) {
	const { loader, list } = myApiReducer;
	return {
		loader,
		list
	};
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ myApiWatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
