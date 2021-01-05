import { connect } from "react-redux";
import PlayerList from "./PlayerList";

const mapStateToProps = ({ allPlayers }) => {
    return {
        allPlayers: allPlayers,
    }
}

export default connect(mapStateToProps)(PlayerList);