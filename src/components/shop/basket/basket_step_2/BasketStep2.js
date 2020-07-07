import React, {Component} from 'react';
import "./_basket_step_2.scss"
import $ from "jquery";

class BasketStep2 extends Component
{
    state =
        {
            disabled: true,

            name: "",
            nameVal: false,
            surname: "",
            surnameVal: false,
            email: "",
            emailVal: false,

            address: "",
            addressVal: false,
            zipCode: "",
            zipCodeVal: false,
            city: "",
            cityVal: false,
            phone: "",
            phoneVal: false,

            agreementChecked: false,
            submitHandle: false,
        };

    componentDidMount()
    {
        const {deliveryDetails, deliveryDetailsVal} = this.props;
        if(deliveryDetailsVal)
        {
            this.setState({
                disabled: false,
                name: deliveryDetails.name,
                surname: deliveryDetails.surname,
                email: deliveryDetails.email,
                address: deliveryDetails.address,
                zipCode: deliveryDetails.zipCode,
                city: deliveryDetails.city,
                phone: deliveryDetails.phone,
            });

            $(function ()
            {
                document.querySelector(".basket-step-2-form-section-agreements").querySelector("input")
                .setAttribute("checked", "true")
            });
        }
    }

    validation = (e, valType, length) =>
    {
        e.target.value.length >= length ? valType=true : valType=false;
        return valType;
    };

    handleChangeName = e =>
    {
        let nameV;
        let nameVal = this.validation(e, nameV, 2);
        this.setState({
            name: e.target.value,
            nameVal: nameVal
        });
        const {surnameVal, addressVal, emailVal, cityVal, phoneVal, zipCodeVal, agreementChecked} = this.state;
        (nameVal && surnameVal && emailVal && addressVal && zipCodeVal && cityVal && phoneVal && agreementChecked)
        || this.props.deliveryDetailsVal ?
            this.setState({disabled: false}):
            this.setState({disabled: true});
    };

    handleChangeSurname = e =>
    {
        let surnameV;
        let surnameVal = this.validation(e, surnameV, 2);
        this.setState({
            surname: e.target.value,
            surnameVal: surnameVal
        });
        const {nameVal, addressVal, emailVal, cityVal, phoneVal, zipCodeVal, agreementChecked} = this.state;
        (nameVal && surnameVal && emailVal && addressVal && zipCodeVal && cityVal && phoneVal && agreementChecked)
        || this.props.deliveryDetailsVal ?
            this.setState({disabled: false}):
            this.setState({disabled: true});
    };

    handleChangeAddress = e =>
    {
        let addressV;
        let addressVal = this.validation(e, addressV, 4);
        this.setState({
            address: e.target.value,
            addressVal: addressVal
        });
        const {nameVal, surnameVal, emailVal, cityVal, phoneVal, zipCodeVal, agreementChecked} = this.state;
        (nameVal && surnameVal && emailVal && addressVal && zipCodeVal && cityVal && phoneVal && agreementChecked)
        || this.props.deliveryDetailsVal ?
            this.setState({disabled: false}):
            this.setState({disabled: true});
    };

    handleChangeCity = e =>
    {
        let cityV;
        let cityVal = this.validation(e, cityV, 2);
        this.setState({
            city: e.target.value,
            cityVal: cityVal
        });
        const {nameVal, surnameVal, emailVal, addressVal, phoneVal, zipCodeVal, agreementChecked} = this.state;
        (nameVal && surnameVal && emailVal && addressVal && zipCodeVal && cityVal && phoneVal && agreementChecked)
        || this.props.deliveryDetailsVal ?
            this.setState({disabled: false}):
            this.setState({disabled: true});
    };

    handleChangeZipCode = e =>
    {
        let zipCodeVal = e.target.value.length === 6;
        this.setState({
            zipCode: e.target.value,
            zipCodeVal: zipCodeVal
        });
        const {nameVal, surnameVal, emailVal, addressVal, phoneVal, cityVal, agreementChecked} = this.state;
        (nameVal && surnameVal && emailVal && addressVal && zipCodeVal && cityVal && phoneVal && agreementChecked)
        || this.props.deliveryDetailsVal ?
            this.setState({disabled: false}):
            this.setState({disabled: true});
    };

    handleChangePhone = e =>
    {
        let phoneV;
        let phoneVal = this.validation(e, phoneV, 9);
        this.setState({
            phone: e.target.value,
            phoneVal: phoneVal
        });
        const {nameVal, surnameVal, emailVal, addressVal, zipCodeVal, cityVal, agreementChecked} = this.state;
        (nameVal && surnameVal && emailVal && addressVal && zipCodeVal && cityVal && phoneVal && agreementChecked)
        || this.props.deliveryDetailsVal ?
            this.setState({disabled: false}):
            this.setState({disabled: true});
    };

    emailValidate = (email) =>
    {
        const emailValidationCharSet = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailValidationCharSet.test(email);
    };

    handleChangeEmail = e =>
    {
        this.setState({
            email: e.target.value
        });

        this.emailValidate(e.target.value) ?
            this.setState({
                emailVal: true,
            }) :
            this.setState({
                emailVal: false,
            });

        const {nameVal, surnameVal, addressVal, zipCodeVal, cityVal, phoneVal, agreementChecked} = this.state;
        (nameVal && surnameVal && this.emailValidate(e.target.value) && addressVal && zipCodeVal && cityVal && phoneVal && agreementChecked)
        || this.props.deliveryDetailsVal ?
            this.setState({disabled: false}):
            this.setState({disabled: true});
    };

    handleChangeAgreement = (e) =>
    {
        if(e.currentTarget.checked === true)
        {
            this.setState({
                agreementChecked: true
            });
        }
        else
        {
            this.setState({
                agreementChecked: false
            });
        }

        const {nameVal, surnameVal, emailVal, addressVal, zipCodeVal, cityVal, phoneVal} = this.state;
        (nameVal && surnameVal && emailVal && addressVal && zipCodeVal && cityVal && phoneVal && e.currentTarget.checked)
            || this.props.deliveryDetailsVal ?
            this.setState({disabled: false}):
            this.setState({disabled: true});
    };

    handleSubmit = (e) =>
    {
        e.preventDefault();

        if(!this.state.disabled)
        {
            this.setState({
                disabled: false

            });
            const {setBasketStep, basketStep} = this.props;
            setBasketStep(basketStep + 1);

            const {name, surname, email, address, zipCode, city, phone} = this.state;
            this.props.changeDeliveryDetails(name, surname, email, address, zipCode, city, phone);
        }
        else
        {
            this.setState({
                disabled: true,
                submitHandle: true,
            });
        }

    };

    handleGoBack = () =>
    {
        const {setBasketStep, basketStep} = this.props;
        setBasketStep(basketStep - 1)
    };

    render() {

        const {disabled, email, name, surname, address, city, zipCode, phone, submitHandle} = this.state;
        return (
            <>
                <section className="basket-step-2">
                    <div className="container basket-container">
                        <form onSubmit={this.handleSubmit}>
                            <section className="basket-step-2-form">
                                <legend>Dane do wysyłki</legend>
                                <section className="basket-step-2-form-section">
                                    <label>Imię:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="Name"
                                               name="name"
                                               value={name}
                                               onChange={this.handleChangeName}/>
                                    </label>
                                    <label>Nazwisko:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="Surname"
                                               name="surname"
                                               value={surname}
                                               onChange={this.handleChangeSurname}/>
                                    </label>
                                    <label className="obligatory">E-mail:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="E-mail"
                                               name="email"
                                               value={email}
                                               onChange={this.handleChangeEmail}/>
                                    </label>
                                    <label>Adres zamieszkania:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="Address"
                                               name="address"
                                               value={address}
                                               onChange={this.handleChangeAddress}/>
                                    </label>
                                    <label>Miasto:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="City"
                                               name="city"
                                               value={city}
                                               onChange={this.handleChangeCity}/>
                                    </label>
                                    <label>Kod pocztowy:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="Zip code"
                                               name="zipCode"
                                               value={zipCode}
                                               onChange={this.handleChangeZipCode}/>
                                    </label>
                                    <label>Telefon:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="Phone"
                                               name="phone"
                                               value={phone}
                                               onChange={this.handleChangePhone}/>
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
                                    {(disabled && submitHandle) ?
                                        <div className="form-error">
                                            Uzupełnij wszystkie pola
                                        </div>:
                                        <div className="form-error-invisible"/>}
                                    <p className="basket-step-2-form-section-info">
                                        Pola oznaczone&nbsp;
                                        <span className="big-x1">*</span>
                                        &nbsp;są obowiązkowe
                                    </p>
                                </section>
                            </section>
                            <section className="basket-step-btns">
                                <button className="btn" onClick={this.handleGoBack}>
                                    Wstecz
                                </button>
                                <input className="btn" type="submit" value="Dalej"/>
                            </section>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}

export default BasketStep2;