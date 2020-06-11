import React, {Component} from 'react';
import "./_basket.scss"
import Header from "../../general_components/header/Header";
import Footer from "../../general_components/footer/Footer";
import BasketNav from "./basket_nav/BasketNav";

class Basket extends Component
{
    state =
        {
            step: ""
        };

    setStep = (currentStep) =>
    {
        this.setState({
            step: currentStep
        })
    };


    render() {
        return (
            <>
                <Header login={this.props.login} setClearLogin={this.setClearLogin}/>
                <BasketNav/>
                <Footer/>
            </>
        )
    }
}

export default Basket;