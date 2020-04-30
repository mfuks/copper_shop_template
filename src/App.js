import React from 'react';
import {
    HashRouter,
    Route,
} from 'react-router-dom';
import Home from "./components/home/Home";

function App() {
  return (
      <HashRouter>
          <>
              <Route exact path='/' render={() => <Home path="/"/>}/>
          </>
      </HashRouter>
  );
}

export default App;
