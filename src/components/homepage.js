import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

const Homepage = () => (
    <>
        <section className="cardContainer">
            <header className="cardHeader">
                <h2>how it works</h2>
            </header>
            <div className="cardMain">
                <ul>
                    <li>pick your team names</li>
                    <li>pick your team colours</li>
                    <li>add your players</li>
                    <li>generate your teams</li>
                </ul>
            </div>
        </section>
        <Link to={`/team-settings`}>
            <Button 
                className="btn"
                label= "Settings"
                name= "Settings"
            />
        </Link>
    </>
)

export default Homepage;