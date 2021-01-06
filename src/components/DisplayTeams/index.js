import { connect } from 'react-redux';
import DisplayTeams from './DisplayTeams';

// state
const mapStateToProps = ({ team1Players, team1Name, team2Players, team2Name }) => {
    return {
        team1Players: team1Players,
        team1Name: team1Name,
        team2Players: team2Players,
        team2Name: team2Name,
    }
}

export default connect(mapStateToProps)(DisplayTeams);