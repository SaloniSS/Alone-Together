import React from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';

import Home from './Home/Home'
import GetSupport from './ResourcePages/GetSupport'
import Hustle from './ResourcePages/Hustle'
import Relax from './ResourcePages/Relax'
import Attend from './ResourcePages/Attend'
import Host from './ResourcePages/Host'
import AddResource from './AddResource/AddResource';
import Footer from './Footer/Footer';
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
      <Footer />
    </Router>
  );
}

export default App;
