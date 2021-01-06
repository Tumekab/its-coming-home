import { connect } from "react-redux";
import PlayerNames from "./PlayerNames";
import { addPlayer } from "../../data/actions/state";

const mapStateToProps = ({ teamsConfirmed }) => {
    return {
        teamsConfirmed: teamsConfirmed,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => {
            dispatch(addPlayer(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerNames);