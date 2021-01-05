import React from "react";

const Homepage = () => (
    <>
        <main>
            <header className="headerBG">
                <h1 className="title">it's coming home</h1>
            </header>
            <h3 className="subTitle">a 5-a-side team generator</h3>
        </main>
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
    </>
)

export default Homepage;