import React, {Component} from 'react';
import "./_basket.scss"
import Header from "../../general_components/header/Header";
import Footer from "../../general_components/footer/Footer";
import BasketNav from "./basket_nav/BasketNav";
import BasketStep1 from "./basket_step_1/BasketStep1";
import BasketStep2 from "./basket_step_2/BasketStep2";
import BasketStep3 from "./basket_step_3/BasketStep3";

class Basket extends Component
{
    render() {
        const {basketStep, login, setBasketStep, basketPath, basket, basketSum, setClearLogin, basketAmount,
            handleChangeCurrentDelivery, currentDelivery, handleChangeTotalSum, totalSum, handleDeliveryChange,
            delivery, changeDeliveryDetails, deliveryDetailsVal, deliveryDetails} = this.props;
        return (
            <>
                <Header login={login}
                        setClearLogin={setClearLogin}
                        basketPath={basketPath}
                        basketSum={basketSum}
                        basketAmount={basketAmount}/>
                <BasketNav basketStep={basketStep}/>
                {basketStep === 1 &&
                <BasketStep1 setBasketStep={setBasketStep}
                             basket={basket}
                             basketSum={basketSum}
                             handleChangeCurrentDelivery={handleChangeCurrentDelivery}
                             currentDelivery={currentDelivery}
                             handleChangeTotalSum={handleChangeTotalSum}
                             totalSum={totalSum}
                             basketStep={basketStep}
                             handleDeliveryChange={handleDeliveryChange}
                             delivery={delivery}/>}
                {basketStep === 2 &&
                <BasketStep2 setBasketStep={setBasketStep}
                             basket={basket}
                             basketSum={basketSum}
                             basketStep={basketStep}
                             changeDeliveryDetails={changeDeliveryDetails}
                             deliveryDetailsVal={deliveryDetailsVal}
                             deliveryDetails={deliveryDetails}/>}
                {basketStep === 3 &&
                <BasketStep3 setBasketStep={setBasketStep}
                             basket={basket}
                             basketSum={basketSum}
                             basketStep={basketStep}
                             currentDelivery={currentDelivery}
                             totalSum={totalSum}/>}
                <Footer/>
            </>
        )
    }
}

export default Basket;