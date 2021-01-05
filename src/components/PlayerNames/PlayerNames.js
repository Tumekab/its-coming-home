//players input
import React from "react";
import Input from '../input';

class playerNames extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
        };

        this.handlePlayerName = this.handlePlayerName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handlePlayerName = (event) => {
        this.setState({ playerName: event.currentTarget.value });  
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit({ ...this.state });

        this.setState({
            playerName: ""
        });
    }

    render(){
        let { playerName } = this.state;
        
        return (
            <section className="cardContainer">
                <header className="cardHeader">
                    <h2>enter your players</h2>
                </header>
                <div className="cardMain">
                    <form onSubmit={ this.handleSubmit }>
                        <section className="inputContainer1">
                            <Input 
                                label="Player 1 Name"
                                handleChange={this.playerName}
                                value={ playerName }
                                type="text"
                            />
                        </section>    
                    </form>
                </div>
            </section>
        );
    }
}

export default playerNames;