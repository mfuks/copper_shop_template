import React, {Component} from 'react';
import "./_basket.scss"
import Header from "../../general_components/header/Header";
import Footer from "../../general_components/footer/Footer";
import BasketNav from "./basket_nav/BasketNav";
import BasketStep1 from "./basket_step_1/BasketStep1";

class Basket extends Component
{

    render() {
        const {basketStep, login, setBasketStep, basketPath, basket, basketSum, setClearLogin, basketAmount} = this.props;
        return (
            <>
                <Header login={login}
                        setClearLogin={setClearLogin}
                        basketPath={basketPath}
                        basketSum={basketSum}
                        basketAmount={basketAmount}/>
                <BasketNav basketStep={basketStep}/>
                {basketStep === 1 &&
                <BasketStep1 setStep={setBasketStep}
                             basket={basket}
                             basketSum={basketSum}/>}
                <Footer/>
            </>
        )
    }
}

export default Basket;