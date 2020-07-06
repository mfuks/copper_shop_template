import React, {Component} from 'react';
import "./_basket_step_2.scss"

class BasketStep2 extends Component
{
    state =
        {
            disabled: true
        };

    handleSubmit = () =>
    {
        const {setBasketStep, basketStep} = this.props;
        setBasketStep(basketStep + 1);
    };

    handleGoBack = () =>
    {
        const {setBasketStep, basketStep} = this.props;
        setBasketStep(basketStep - 1)
    };

    render() {
        const { disabled} = this.state;
        return (
            <>
                <section className="basket-step-2">
                    <div className="container basket-container">
                        <form>
                            <h2>Dane kontaktowe</h2>
                            <section className="registration-content-form-sections">
                                <label>Imię:
                                    <input type="text"
                                           placeholder="Name"
                                           name="name"
                                           //value={name}
                                           onChange={this.handleChangeName}/>
                                </label>
                                <label>Nazwisko:
                                    <input type="text"
                                           placeholder="Surname"
                                           name="surname"
                                           // value={surname}
                                           onChange={this.handleChangeSurname}/>
                                </label>
                                <label className="obligatory">E-mail:
                                    <span className="big-x2">*</span>
                                    <input type="text"
                                           placeholder="E-mail"
                                           name="email"
                                           //value={email}
                                           onChange={this.handleChangeEmail}/>
                                </label>
                                <label>Adres zamieszkania:
                                    <input type="text"
                                           placeholder="Address"
                                           name="address"
                                           //value={address}
                                    />
                                </label>
                                <label>Miasto:
                                    <input type="text"
                                           placeholder="City"
                                           name="city"
                                           //value={city}
                                    />
                                </label>
                                <label>Kod pocztowy:
                                    <input type="text"
                                           placeholder="Zip code"
                                           name="zipCode"
                                           //value={zipCode}
                                    />
                                </label>
                                <label>Telefon:
                                    <input type="text"
                                           placeholder="Phone"
                                           name="phone"
                                           //value={phone}
                                    />
                                </label>
                            </section>
                        </form>
                        <section className="basket-step-btns">
                            {/*{!currentDelivery && <p>Aby przejść dalej wybierz opcje dostawy</p>}*/}
                            <button onClick={this.handleGoBack}>
                                Wstecz
                            </button>
                            <button onClick={this.handleSubmit} disabled={disabled}>
                                Dalej
                            </button>
                        </section>
                    </div>
                </section>
            </>
        )
    }
}

export default BasketStep2;