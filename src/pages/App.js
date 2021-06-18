import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import '../sass/app.sass';
import Home from './Home';

import useHeader from './../hooks/useHeader';

import HomeContext from './../contexts/HomeContext';


const App = () => {
  const { isAppOpen, isProfilOpen, refApp, refProfil, clickApp, clickProfil } = useHeader();
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeContext.Provider value={{ isAppOpen, isProfilOpen, refApp, refProfil, clickApp, clickProfil }} >
            <Home/>
          </HomeContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
