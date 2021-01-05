const playerList = ({ allPlayers }) => {
    return (
        <>
           { allPlayers.map((player, index)=> (
                <li key={ index }>
                    <p>{player.name}</p>   
                </li> 
            ))} 
        </>
    )
}

export default playerList;