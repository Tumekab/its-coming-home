// team names
//team colours 
// player amount
import React from "react";
import Input from '../input';
import AddPlayers from '../PlayerNames';
import PlayerList from '../PlayerList';
import GenerateTeams from "../GenerateTeams";
import Button from '../button';

class TeamSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            team1Name: "",
            team2Name: "",
        };

        this.handleTeam1Name = this.handleTeam1Name.bind(this);
        this.handleTeam2Name = this.handleTeam2Name.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTeam1Name = (event) => {
        this.setState({ team1Name: event.currentTarget.value });  
    }

    handleTeam2Name = (event) => {
        this.setState({ team2Name: event.currentTarget.value });  
    }

    handleSubmit = (event) => {  
        event.preventDefault();
        this.props.handleSubmit({ ...this.state });
    }

    render(){
        let { team1Name, team2Name } = this.state;
        
        return (
            <>
                <section className="cardContainer">
                    <header className="cardHeader">
                        <h2>customise your teams</h2>
                    </header>
                    <div className="cardMain">
                        <form onSubmit={ this.handleSubmit }>
                            <section className="inputContainer">
                                <Input 
                                    label="Choose Team One Name"
                                    handleChange={this.handleTeam1Name}
                                    value={ team1Name }
                                    type="text"
                                />
                            {/* </section>     */}
                      
                            {/* <div className="teamDivider"></div> */}
                        {/* <section className="inputContainer"> */}
                            
                                <Input 
                                label="Choose Team Two Name"
                                handleChange={this.handleTeam2Name}
                                value={ team2Name }
                                type="text"
                                />
                            </section>
                            <Button 
                                className="btn confirmBtn"
                                label= "confirm"
                                name= "confirm"
                            />
                            {/* </section> */}
                        </form>
                    </div>
                </section>
                <AddPlayers />
                <section className="cardContainer">
                    <header className="cardHeader">
                        <h2>your players</h2>
                    </header>
                    <PlayerList />
                </section>
                <GenerateTeams />
            </>
        );
    }
}

export default TeamSettings;

