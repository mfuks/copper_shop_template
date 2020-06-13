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

            basketStep: 1,
            basketAmount: 0
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
        let productExistIndex;
        let newBasket;

        for (let i = 0; i < this.state.basket.length ; i++)
        {
            if(this.state.basket[i].product === productAdded)
            {
                productExistIndex = i;
            }
        }

        if(!productExistIndex && productExistIndex !== 0)
        {
            let newAmount = 1;
            let newProduct = productAdded;
            newBasket = [...this.state.basket];
            newBasket.push({
                product: newProduct,
                amount: newAmount,
                total: (+newAmount * +newProduct.price).toString()
            });
        }
        else
        {
            newBasket = [...this.state.basket];
            newBasket[productExistIndex].amount++;
            newBasket[productExistIndex].total = (+(+newBasket[productExistIndex].amount) * +newBasket[productExistIndex].product.price).toString();
        }

        this.setState({
            basket: newBasket
        });

        let summary = 0;
        let amount = 0;

        for (let i = 0; i < newBasket.length ; i++)
        {
            summary = (+summary + +newBasket[i].total).toString();
            amount = amount + +newBasket[i].amount
        }

        this.setState({
            basket: newBasket,
            basketSum: summary,
            basketAmount: amount
        });

    };

    render() {
        const {login, basket, basketSum, basketStep, basketAmount} = this.state;
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
                                                                  basketSum={basketSum}
                                                                  setBasketStep={this.setBasketStep}
                                                                  basketAmount={basketAmount}/>}/>
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
                                                                      basketStep={basketStep}
                                                                      basketAmount={basketAmount}/>}/>
                </>
            </HashRouter>
        );
    }

}

export default App;
