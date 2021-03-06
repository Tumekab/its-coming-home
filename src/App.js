import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './styles/main.css';
import Header from './components/Header';
import Homepage from './components/homepage';
import Footer from './components/footer';
import TeamSettings from './components/TeamSettings';
import TeamSelections from './components/DisplayTeams';
// import MatchHistory from './components/MatchHistory';

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
          {/* <Route exact path='/match-history'>
            <MatchHistory />
          </Route> */}
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
