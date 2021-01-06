import { connect } from "react-redux";
import Team2ScoreCard from "./Team2ScoreCard";
import { updateTeam2Score } from "../../data/actions/state";

const mapStateToProps = ({ team2Name, team2Score }) => {
    return {
        team2Name: team2Name,
        team2Score: team2Score,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (data) => {
            dispatch(updateTeam2Score(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team2ScoreCard);