import React from 'react';
import {
    HashRouter,
    Route,
} from 'react-router-dom';
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";

function App() {
  return (
      <HashRouter>
          <>
              <Route exact path='/' render={() => <Home path="/"/>}/>
              <Route exact path='/shop' render={() => <Shop path="/shop"/>}/>
          </>
      </HashRouter>
  );
}

export default App;
