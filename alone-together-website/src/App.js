import React from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';

import logo from './logo.svg';
import Home from './Home/Home'
import GetSupport from './Resources/Pages/GetSupport/GetSupport'
import Hustle from './Resources/Pages/Hustle/Hustle'
import Relax from './Resources/Pages/Relax/Relax'
import Attend from './Resources/Pages/Attend/Attend'
import Host from './Resources/Pages/Host/Host'
import AddResource from './AddResource/AddResource';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/get-support" exact>
            <GetSupport />
          </Route>
          <Route path="/hustle" exact>
            <Hustle />
          </Route>
          <Route path="/relax" exact>
            <Relax />
          </Route>
          <Route path="/attend" exact>
            <Attend />
          </Route>
          <Route path="/host" exact>
            <Host />
          </Route>
          <Route path="/add-resource" exact>
            <AddResource />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
