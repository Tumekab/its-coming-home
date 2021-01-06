import { connect } from "react-redux";
import MatchHistory from "./MatchHistory";
import { getGames } from "../../data/actions/api";

const mapStateToProps = ({ previousGames }) => {
  return {
    previousGames,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleGamesLoading: () => {
            dispatch(getGames());
        }
    }
}

// const mapDispatchToProps = (dispatch) => ({
//   handleGamesLoading: () => dispatch(getGames()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistory);