import React from 'react';
import {
    HashRouter,
    Route,
} from 'react-router-dom';
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import AboutUs from "./components/about_us/AboutUs";
import Login from "./components/login_and_registration/login/Login";
import Registration from "./components/login_and_registration/registration/Registration";

function App() {
  return (
      <HashRouter>
          <>
              <Route exact path='/' render={() => <Home path="/"/>}/>
              <Route exact path='/shop' render={() => <Shop path="/shop"/>}/>
              <Route exact path='/contact' render={() => <Contact path="/contact"/>}/>
              <Route exact path='/about_us' render={() => <AboutUs path="/about_us"/>}/>
              <Route exact path='/login' render={() => <Login path="/login"/>}/>
              <Route exact path='/registration' render={() => <Registration path="/registration"/>}/>
          </>
      </HashRouter>
  );
}

export default App;
