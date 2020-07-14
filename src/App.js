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
            basketAmount: 0,
            totalSum: "",

            currentDelivery: "",

            delivery: {
                letter: "800",
                inPost: "1000",
                courier: "2000",
            },

            deliveryDetails:{
                name: "",
                surname: "",
                email: "",
                address: "",
                zipCode: "",
                city: "",
                phone: "",
            },

            deliveryDetailsVal: false

        };

    handleChangeDeliveryDetails = (name, surname, email, address, zipCode, city, phone) =>
    {
        this.setState({
            deliveryDetails:
                {
                    name: name,
                    surname: surname,
                    email: email,
                    address: address,
                    zipCode: zipCode,
                    city: city,
                    phone: phone,
                },
            deliveryDetailsVal: true
        });
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

        for (let i = 0; i < this.state.basket.length; i++)
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
        this.basketSummary(newBasket);
    };

    basketOnAmountChange = (target) =>
    {
        let productExistIndex;
        let newBasket;
        let toEdit;

        if(typeof target === "object")
        {
            toEdit = target.parentNode.parentNode.getElementsByClassName("basket-product-name")[0].getElementsByTagName("span")[0].innerText;
        }

        if(target.value === "0")
        {
            this.basketDelete(target.parentNode.parentNode.getElementsByClassName("basket-product-bin")[0].getElementsByTagName("i")[0]);
            newBasket = this.basketDelete(target.parentNode.parentNode.getElementsByClassName("basket-product-bin")[0].getElementsByTagName("i")[0]);
        }
        else
        {
            for (let i = 0; i < this.state.basket.length; i++)
            {
                if(this.state.basket[i].product.id === toEdit)
                {
                    productExistIndex = i;
                    break;
                }
            }
            newBasket = [...this.state.basket];
            newBasket[productExistIndex].amount = target.value.toString();
            newBasket[productExistIndex].total = (+(+newBasket[productExistIndex].amount) * +newBasket[productExistIndex].product.price).toString();
        }

        this.basketSummary(newBasket);
        if(this.state.currentDelivery)
        {
            this.handleChangeCurrentDelivery(this.state.currentDelivery);
            this.handleChangeTotalSum(this.basketSummary(newBasket), this.state.currentDelivery);
        }

    };


    basketSummary = (newBasket) =>
    {
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
        return summary;
    };

    handleDeliveryChange = (delivery) =>
    {
        this.handleChangeCurrentDelivery(delivery);
        this.handleChangeTotalSum(this.state.basketSum, delivery);
    };

    handleChangeCurrentDelivery = (currentDelivery) =>
    {
        this.setState({
            currentDelivery: currentDelivery
        });
    };

    handleChangeTotalSum = (products, delivery) =>
    {
        let total = (+products + +delivery).toString();

        this.setState({
            totalSum: total
        });
    };

    priceDisplay = (price) =>
    {
        return price.substr(0, price.length-2) + "," +
            price.substr(price.length-2, 2)  + "zł"
    };

    basketDelete = (target) =>
    {
        let productExistIndex;
        let newBasket;
        let toDelete;

        if(typeof target === "object")
        {
            toDelete = target.parentNode.parentNode.getElementsByClassName("basket-product-name")[0].getElementsByTagName("span")[0].innerText;
        }
        for (let i = 0; i < this.state.basket.length; i++)
        {
            if(this.state.basket[i].product.id === toDelete)
            {
                productExistIndex = i;
                break;
            }
        }
        newBasket = [...this.state.basket];
        delete newBasket[productExistIndex];

        let newBasket2 = [];

        for (let i = 0; i < newBasket.length; i++)
        {
            if(newBasket[i] !== newBasket[productExistIndex])
            {
                newBasket2.push(newBasket[i]);
            }
        }
        this.basketSummary(newBasket2);

        return newBasket2;
    };

    basketSetClear = () =>
    {
        this.setState({
            basket: [],
            basketSum: "000",

            basketAmount: 0,
            totalSum: "",

            currentDelivery: "",

            delivery: {
                letter: "800",
                inPost: "1000",
                courier: "2000",
            },

            deliveryDetails:{
                name: "",
                surname: "",
                email: "",
                address: "",
                zipCode: "",
                city: "",
                phone: "",
            },

            deliveryDetailsVal: false
            })
    };

    basketSetClearStep = () =>
    {
        this.setState({
            basketStep: 1
        })
    };

    render() {
        const {login, basket, basketSum, basketStep, basketAmount, currentDelivery, totalSum,
            delivery, deliveryDetailsVal, deliveryDetails} = this.state;
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
                                                                      priceDisplay={this.priceDisplay}
                                                                      setBasketStep={this.setBasketStep}
                                                                      basket={basket}
                                                                      basketSum={basketSum}
                                                                      basketPath="/basket"
                                                                      basketStep={basketStep}
                                                                      basketAmount={basketAmount}
                                                                      basketDelete={this.basketDelete}
                                                                      basketSetClear={this.basketSetClear}
                                                                      basketSetClearStep={this.basketSetClearStep}
                                                                      basketOnAmountChange={this.basketOnAmountChange}
                                                                      handleChangeCurrentDelivery={this.handleChangeCurrentDelivery}
                                                                      currentDelivery={currentDelivery}
                                                                      totalSum={totalSum}
                                                                      delivery={delivery}
                                                                      deliveryDetailsVal={deliveryDetailsVal}
                                                                      deliveryDetails={deliveryDetails}
                                                                      handleDeliveryChange={this.handleDeliveryChange}
                                                                      handleChangeDeliveryDetails={this.handleChangeDeliveryDetails}
                                                            />}/>
                </>
            </HashRouter>
        );
    }

}

export default App;
