const playerList = ({ allPlayers }) => {
    return (
        <div className="cardMain">
            <ul>
                { allPlayers.map((player, index)=> (
                    <li key={ index }>
                        <p>{player.name}</p>   
                    </li> 
                ))} 
            </ul>
        </div>  
    )
}

export default playerList;