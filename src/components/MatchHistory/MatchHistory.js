import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button";
import Loading from "../Loading";

class MatchHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previousGames: this.props.previousGames,
        }
    }

    componentDidMount() {
        this.props.handleGamesLoading();
    }

    render(){
        let { previousGames } = this.state;
        return (
            <>
                <section className="cardContainer">
                    <header className="cardHeader">
                        <h2>how it works</h2>
                    </header>
                    <div className="cardMain">
                    <Loading loaded={previousGames.length}>
                        <table className="match-table">
                            <thead>
                                <tr>
                                    <th scope="col">Game Date</th>
                                    <th scope="col">Team Names</th>
                                    <th scope="col">Winning Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                { previousGames.map((previousGame, index) => (
                                    <tr key={index} >
                                        <td>{previousGame.game_date}</td>
                                        <td>{`${previousGame.team_one} VS ${previousGame.team_two}`}</td> 
                                        <td>{ `${previousGame.winning_team}` }</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Loading>
                    </div>
                </section>
                </>
        );
        
    }
}
export default MatchHistory;