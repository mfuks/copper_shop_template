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
                            <legend>Dane do wysyłki</legend>
                            <section className="basket-step-2-form-section">
                                <label>Imię:
                                    <span className="big-x2">*</span>
                                    <input type="text"
                                           placeholder="Name"
                                           name="name"
                                           //value={name}
                                           onChange={this.handleChangeName}/>
                                </label>
                                <label>Nazwisko:
                                    <span className="big-x2">*</span>
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
                                    <span className="big-x2">*</span>
                                    <input type="text"
                                           placeholder="Address"
                                           name="address"
                                           //value={address}
                                    />
                                </label>
                                <label>Miasto:
                                    <span className="big-x2">*</span>
                                    <input type="text"
                                           placeholder="City"
                                           name="city"
                                           //value={city}
                                    />
                                </label>
                                <label>Kod pocztowy:
                                    <span className="big-x2">*</span>
                                    <input type="text"
                                           placeholder="Zip code"
                                           name="zipCode"
                                           //value={zipCode}
                                    />
                                </label>
                                <label>Telefon:
                                    <span className="big-x2">*</span>
                                    <input type="text"
                                           placeholder="Phone"
                                           name="phone"
                                           //value={phone}
                                    />
                                </label>
                            </section>
                            <section className="basket-step-2-form-section">
                                <div className="basket-step-2-form-section-agreements">
                                    <input type="checkbox"
                                           id="agreement"
                                           onChange={this.handleChangeAgreement}/>
                                    <label htmlFor="agreement">
                                        <p>*</p>
                                        <span/>
                                        <p>
                                            Akceptuję regulamin sklepu
                                        </p>
                                    </label>
                                </div>
                                {/*{(!agreementChecked && submitHandle) ?*/}
                                {/*    <div className="form-error">*/}
                                {/*        Zgoda jest obowiązkowa*/}
                                {/*    </div>:*/}
                                {/*    <div className="form-error-invisible"/>}*/}
                                <p className="basket-step-2-form-section-info">
                                    Pola oznaczone&nbsp;
                                    <span className="big-x1">*</span>
                                    &nbsp;są obowiązkowe
                                </p>
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