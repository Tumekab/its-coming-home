import {
  HashRouter as Router,
  Route, Switch
  } from "react-router-dom";
import './styles/main.css';
import Header from './components/Header';
import Homepage from './components/homepage';
import TeamSettings from './components/TeamSettings/TeamSettings';
import TeamSelections from './components/DisplayTeams/DisplayTeams';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path='/'>
              <Homepage /> 
          </Route>
          <Route exact path='/team-settings'>
            <TeamSettings />
          </Route>
          <Route exact path='/team-selection'>
            <TeamSelections />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
