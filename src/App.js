import React, {Component} from 'react';
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
import Basket from "./components/shop/basket/Basket";

class App extends Component
{
    state =
        {
            login: "",
            basket: [],
            basketSum: "000",

            basketStep: 1
        };

    setBasketStep = (currentStep) =>
    {
        this.setState({
            basketStep: currentStep
        });
    };

    setLogin = (user) =>
    {
        this.setState({
            login: user
        })
    };

    setClearLogin = () =>
    {
        this.setState({
            login: "",
        })
    };

    basketAdd = (productAdded) =>
    {
        let newBasket = [...this.state.basket];
        newBasket.push(productAdded);

        this.setState({
            basket: newBasket,
            basketSum: (+this.state.basketSum + +productAdded.price).toString()
        });
    };

    render() {
        const {login, basket, basketSum, basketStep} = this.state;
        return (
            <HashRouter>
                <>
                    <Route exact path='/' render={() => <Home path="/"
                                                              login={login}
                                                              setClearLogin={this.setClearLogin}/>}/>
                    <Route exact path='/shop' render={() => <Shop path="/shop"
                                                                  login={login}
                                                                  setClearLogin={this.setClearLogin}
                                                                  basketAdd={this.basketAdd}
                                                                  basket={basket}
                                                                  basketSum={basketSum}
                                                                  setBasketStep={this.setBasketStep}/>}/>
                    <Route exact path='/contact' render={() => <Contact path="/contact"
                                                                        login={login}
                                                                        setClearLogin={this.setClearLogin}/>}/>
                    <Route exact path='/about_us' render={() => <AboutUs path="/about_us"
                                                                         login={login}
                                                                         setClearLogin={this.setClearLogin}/>}/>
                    <Route exact path='/login' render={() => <Login path="/login"
                                                                    setLogin={this.setLogin}/>}/>
                    <Route exact path='/registration' render={() => <Registration path="/registration"/>}/>
                    <Route exact path='/basket' render={() => <Basket path="/basket"
                                                                      login={login}
                                                                      setClearLogin={this.setClearLogin}
                                                                      basket={basket}
                                                                      basketSum={basketSum}
                                                                      basketPath="/basket"
                                                                      setBasketStep={this.setBasketStep}
                                                                      basketStep={basketStep}/>}/>
                </>
            </HashRouter>
        );
    }

}

export default App;
