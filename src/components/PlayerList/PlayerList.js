const playerList = ({ allPlayers }) => {
    return (
        <div className="cardMain">
            { allPlayers.map((player, index)=> (
                <li key={ index }>
                    <p>{player.name}</p>   
                </li> 
            ))} 
        </div>  
    )
}

export default playerList;