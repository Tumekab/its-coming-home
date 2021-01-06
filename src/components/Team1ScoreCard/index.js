import { connect } from "react-redux";
import Team1ScoreCard from "./Team1ScoreCard";
import { updateTeam1Score } from "../../data/actions/state";

const mapStateToProps = ({ team1Name, team1Score }) => {
    return {
        team1Name: team1Name,
        team1Score: team1Score,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (data) => {
            dispatch(updateTeam1Score(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team1ScoreCard);