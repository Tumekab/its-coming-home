//display the teams that have been created

import Team1ScoreCard from '../Team1ScoreCard';
import Team2ScoreCard from '../Team2ScoreCard';


const displayTeams = ({ team1Players, team1Name, team2Players, team2Name, handleReset, handleShuffle }) => {
    return (
        <>
            <main className="cardGrid">
                <section className="cardContainer">
                        <header className="cardHeader">
                            <h2>{team1Name}</h2>
                        </header>
                        <div className="cardMain">
                            <ul>
                                { team1Players.map((player, index) => (
                                    <li key={ index }>
                                        <p>{ player.name }</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="cardDivider"></div>
                        <Team1ScoreCard />
                </section>
                <section className="cardContainer">
                    <header className="cardHeader">
                        <h2>{team2Name}</h2>
                    </header>
                        <div className="cardMain">
                            <ul>
                                {team2Players.map((player, index) => (
                                    <li key={ index }>
                                        <p>{ player.name }</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="cardDivider"></div>
                        <Team2ScoreCard />
                </section>
                
            </main> 
            <button
                className="btn add-btn"
                label= "reset"
                name= "reset"
                onClick={ handleReset }>
                reset
            </button> 
            <button
                className="btn add-btn"
                label= "reshuffle"
                name= "reshuffle"
                onClick={ handleShuffle }>
                reshuffle
            </button>    
        </>
    )
}

export default displayTeams;