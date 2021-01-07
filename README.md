# It's Coming Home: a 5-a-side football team generator.
This app was produced to fulfill the brief of the individual technical challenge set at the end of the DevelopMe Fellowship. This is the repository for the front-end of the app. To see the app visit [here](https://tumekab.github.io/football-team-generator/#/). Mock up design is [here](https://www.figma.com/file/RcJDSXs8wxnqpxcnsA8QtE/It-s-Coming-Home?node-id=0%3A1).

This app currently doesn't take requests from the API created [here](https://github.com/Tumekab/football-team-generator-database). The API is being re-done to support posting and storing of team scores. The API created currently is fully working and can take get, post, put and delete requests.

## Brief
The core of the challenge is to create a tool which randomly picks 5-a-side football teams from a list of 10 names.

## Features

### Team Settings
Here you can add you team names and input your team players.

### Team Selection
Here you can view your randomly selected teams.

### Reshuffle Button
Not keen on your team players? Just hit the reshuffle button and you can have new team mates in no time.

### Reset button
Need to start over? This is covered to, just hit the reset button and it'll take you back to the team settings page where you can input your details from the start.

### Team Scores
Just selecting your teams isn't enough? Well you can easily keep track of your game score with the score card displayed right along your team selections.

## Improvements to the App

### Features
- Added ability to delete a player in the player list
- Added ability to have any number of players be split into even teams
- Added ability to randomly generate team names from an API
- Added ability to save a match that gets posted to an API 
- Added ability to view all saved matches in a Match History table from an API

### User Experience
- A visual confirm that team names have been saved
- A visual indicator that 10 names have been added to the list

## Version Management
For this project I used Git and GitHub to version manage. 

## To clone this project

-  In your terminal, cd into the directory on your local machine where you would like the project to be saved <br/>
`cd {directory}`

- Clone the repository to your local machine using this command in your terminal </br>
`git clone {git@github.com:Tumekab/football-team-generator.git}`

- Then run npm install to install all the required packages for the project</br>
`npm install`

- Finally run npm start to run the app locally to develop in </br>
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
