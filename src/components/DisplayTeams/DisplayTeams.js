//display the teams that have been created


const displayTeams = ({ team1Players, team1Name, team2Players, team2Name, handleReset }) => {
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
                </section>
                
            </main> 
            <button
                className="btn add-btn"
                label= "reset"
                name= "reset"
                onClick={ handleReset }>
                reset
            </button>   
        </>
    )
}

export default displayTeams;