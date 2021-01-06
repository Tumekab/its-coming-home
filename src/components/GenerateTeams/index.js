import { connect } from 'react-redux';
import CreateTeams from './CreateTeams';
import { splitIntoTeams } from "../../data/actions/state";
import history from "../../history";

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (data) => {
            dispatch(splitIntoTeams(data));
            history.push("/display-teams");
        }
    };
};

export default connect(null, mapDispatchToProps)(CreateTeams);