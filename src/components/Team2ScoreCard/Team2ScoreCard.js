const Team1ScoreCard = ({ team2Name, team2Score, handleClick}) => {
    return (
        <>
            <div>
                  <h3>{ team2Name }<br/>Score: </h3>
                  <div className="scoreBg">
                      <p className="teamScore">{ team2Score }</p>
                  </div>
                  <div>
                      <button 
                      onClick={ handleClick }
                      className="btn plusBtn">+</button>
                  </div>
            </div>
         </>
    )
}

export default Team1ScoreCard;