import { connect } from "react-redux";
import PlayerNames from "./PlayerNames";
import { addPlayer } from "../../data/actions/state";

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => {
            dispatch(addPlayer(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayerNames);