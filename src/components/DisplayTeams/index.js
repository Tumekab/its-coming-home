import { connect } from 'react-redux';
import DisplayTeams from './DisplayTeams';
import { reset } from '../../data/actions/state';
import { splitIntoTeams } from "../../data/actions/state";
import history from '../../history';

const mapStateToProps = ({ team1Players, team1Name, team2Players, team2Name }) => {
    return {
        team1Players: team1Players,
        team1Name: team1Name,
        team2Players: team2Players,
        team2Name: team2Name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => { 
            dispatch(reset())
            history.push("/team-settings");
        },
        handleShuffle: (data) => { 
            dispatch(splitIntoTeams(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTeams);