import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import '../sass/app.sass';

import Home from './Home';
import Search from './Search';

import useHeader from './../hooks/useHeader';

import HomeContext from './../contexts/HomeContext';
import APropos from './APropos';
import CreerPortfolio from './CreerPortfolio';
import Fonctionnement from './Fonctionnement';
import MentionsLegales from './MentionsLegales';
import Realisations from './Realisations';
import Skills from './Skills';
import Profil from './Profil';

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
        <Route path='/search/:search'>
          <HomeContext.Provider value={{ isAppOpen, isProfilOpen, refApp, refProfil, clickApp, clickProfil }} >
            <Search style={{marginBottom: 6}} />
          </HomeContext.Provider>
        </Route>
        <Route path='/a-propos'>
          <APropos />
        </Route>
        <Route path='/profil'>
          <Profil />
        </Route>
        <Route path='/creer-portfolio'>
          <CreerPortfolio />
        </Route>
        <Route path='/fonctionnement'>
          <Fonctionnement />
        </Route>
        <Route path='/mentions-legales'>
          <MentionsLegales />
        </Route>
        <Route path='/realisations'>
          <HomeContext.Provider value={{ isAppOpen, isProfilOpen, refApp, refProfil, clickApp, clickProfil }} >
            <Realisations />
          </HomeContext.Provider>
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
