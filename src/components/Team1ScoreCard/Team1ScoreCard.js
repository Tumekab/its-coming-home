const Team1ScoreCard = ({ team1Name, team1Score, handleClick}) => {
    return (
        <>
            <div>
                  <h3>{ team1Name } <br/>Score:</h3>
                  <div className="scoreBg">
                      <p className="teamScore">{ team1Score }</p>
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