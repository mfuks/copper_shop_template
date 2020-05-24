import React from 'react';
import {
    HashRouter,
    Route,
} from 'react-router-dom';
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";

function App() {
  return (
      <HashRouter>
          <>
              <Route exact path='/' render={() => <Home path="/"/>}/>
              <Route exact path='/shop' render={() => <Shop path="/shop"/>}/>
              <Route exact path='/contact' render={() => <Contact path="/contact"/>}/>
          </>
      </HashRouter>
  );
}

export default App;
