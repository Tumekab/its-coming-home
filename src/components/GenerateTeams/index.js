import { connect } from 'react-redux';
import GenerateTeams from './GenerateTeams';
import { splitIntoTeams } from "../../data/actions/state";
import history from "../../history";

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (data) => {
            dispatch(splitIntoTeams(data));
            history.push("/team-selection");
        }
    };
};

export default connect(null, mapDispatchToProps)(GenerateTeams);