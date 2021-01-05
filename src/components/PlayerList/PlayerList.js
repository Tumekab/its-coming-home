const playerList = ({ allPlayers }) => {
    return (
        <section className="cardContainer">
            <header className="cardHeader">
                <h2>your players</h2>
            </header>
            {/* { allPlayers.map((player, index)=> (
                <li className="list-group-item list-style-item" key={ index }>
                    <p className="list-group-item-text">{player.name}</p>   
                </li> 
                ))} */}
        </section>
    )
}

export default playerList;