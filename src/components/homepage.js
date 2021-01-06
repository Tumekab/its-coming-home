import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";


const Homepage = () => (
    <main>
        <section className="cardContainer infoContainer">
            <header className="cardHeader">
                <h2>how it works</h2>
            </header>
            <div className="cardMain">
                <ul>
                    <li>pick your team names</li>
                    <li>add your players</li>
                    <li>generate your teams</li>
                    <li>count your goals</li>
                </ul>
            </div>
        </section>
        <Link to={`/team-settings`}>
            <Button 
                className="btn btnSettings"
                label= "Settings"
                name= "Settings"
            />
        </Link>
    </main>
)

export default Homepage;