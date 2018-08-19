import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './timelineActions';

const mapStateToProps = state => ({ data: state.timelineReducer });

const mapDispatchToProps =
dispatch => ({ actions: bindActionCreators(actions, dispatch) });

const redux = view => connect(mapStateToProps, mapDispatchToProps)(view);

export default redux;
