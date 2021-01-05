import { connect } from 'react-redux';
import TeamSettings from './TeamSettings';
import { sendNamesToState } from '../../data/actions/state';

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (data) => {
            dispatch(sendNamesToState(data));
        }
    };
};

export default connect(null, mapDispatchToProps)(TeamSettings)