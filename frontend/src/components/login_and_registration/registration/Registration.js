import React, {Component} from 'react';
import "./../_lar.scss"
import "./_registration.scss"
import Logo from "../../general_components/header/logo/Logo";
import Footer from "../../general_components/footer/Footer";
import {Link} from "react-router-dom";
import SubmitLar from "../submit_lar/SubmitLar";

class Registration extends Component
{
    state =
        {
            users: "",

            name: "",
            surname: "",
            email: "",
            emailVal: false,
            emailAvailable: false,

            login: "",
            loginVal: false,
            loginAvailable: false,
            password: "",
            passwordVal: false,
            passwordConfirm: "",
            passwordConfirmVal: false,

            address: "",
            addressVal: true,
            zipCode: "",
            zipCodeVal: true,
            city: "",
            cityVal: true,
            phone: "",
            phoneVal: true,

            agreementChecked: false,

            submitHandle: false,
            submitMessage: ""
        };

    componentDidMount()
    {
        const url = "/users";

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(users =>
        {
            this.setState({
                users: [...users]
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    handleChangeName = e =>
    {
        this.setState({
            name: e.target.value
        });
    };

    handleChangeSurname = e =>
    {
        this.setState({
            surname: e.target.value
        });
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

        for (let i = 0; i < this.state.users.length; i++)
        {
            this.setState({
                emailAvailable: true,
            });

            if(this.state.users[i].email === e.target.value)
            {
                this.setState({
                    emailAvailable: false,
                });
                break;
            }
        }

        if(this.emailValidate(e.target.value))
        {
            this.setState({
                emailVal: true,
            })
        }
        else
        {
            this.setState({
                emailVal: false,
            })
        }
    };

    handleChangeLogin = e =>
    {
        this.setState({
            login: e.target.value.replace(" ", "")
        });

        for (let i = 0; i < this.state.users.length; i++)
        {
            this.setState({
                loginAvailable: true,
            });

            if(this.state.users[i].login === e.target.value)
            {
                this.setState({
                    loginAvailable: false,
                });
                break;
            }
        }

        if(e.target.value.length >= 3)
        {
            this.setState({
                loginVal: true,
            })
        }
        else
        {
            this.setState({
                loginVal: false,
            })
        }
    };

    handleChangePassword = e =>
    {
        this.setState({
            password: e.target.value.replace(" ", "")
        });
        if(e.target.value.length >= 5)
        {
            this.setState({
                passwordVal: true,
            })
        }
        else
        {
            this.setState({
                passwordVal: false,
            })
        }
    };

    handleChangePasswordConfirm = e =>
    {
        this.setState({
            passwordConfirm: e.target.value.replace(" ", "")
        });
        if(this.state.password === e.target.value)
        {
            this.setState({
                passwordConfirmVal: true,
            })
        }
        else
        {
            this.setState({
                passwordConfirmVal: false,
            })
        }
    };

    validation = (e, valType, length) =>
    {
        (e.target.value.length >= length || e.target.value.length === 0) ? valType=true : valType=false;
        return valType;
    };

    handleChangeAddress = e =>
    {
        let addressV;
        let addressVal = this.validation(e, addressV, 4);
        this.setState({
            address: e.target.value,
            addressVal: addressVal
        });
    };

    handleChangeCity = e =>
    {
        let cityV;
        let cityVal = this.validation(e, cityV, 2);
        this.setState({
            city: e.target.value,
            cityVal: cityVal
        });
    };

    handleChangeZipCode = e =>
    {
        let zipCodeVal = (e.target.value.length === 6 || e.target.value.length === 0);
        this.setState({
            zipCode: e.target.value,
            zipCodeVal: zipCodeVal
        });
    };

    handleChangePhone = e =>
    {
        let phoneV;
        let phoneVal = this.validation(e, phoneV, 9);
        this.setState({
            phone: e.target.value,
            phoneVal: phoneVal
        });
    };


    handleChangeAgreement = (e) =>
    {
        if(document.getElementById("agreement").checked === true)
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

    };

    handleSubmit = e =>
    {
        e.preventDefault();

        const {name, surname,
            email, emailVal, login, loginVal, password, passwordVal, loginAvailable, emailAvailable, passwordConfirmVal,
            address, addressVal, city, cityVal, zipCode, zipCodeVal, phone, phoneVal, agreementChecked} = this.state;

        if(emailVal && loginVal && passwordVal && passwordConfirmVal && loginAvailable && emailAvailable &&
            agreementChecked && addressVal && cityVal && zipCodeVal && phoneVal)
        {
            const url = `http://localhost:5000/users/add?firstname=${name}&lastname=${surname}&email=${email}&`+
                `login=${login}&user_password=${password}&address=${address}&city=${city}&zipCode=${zipCode}&`+
                `phone=${phone}`;

            fetch(url)
            .then(resp =>{
                if (!resp.ok) {
                    throw new Error("something is wrong...");
                }
                else
                {
                    this.setState({
                        name: "",
                        surname: "",
                        email: "",
                        emailVal: false,
                        emailAvailable: false,

                        login: "",
                        loginVal: false,
                        loginAvailable: false,
                        password: "",
                        passwordVal: false,
                        passwordConfirm: "",
                        passwordConfirmVal: false,

                        address: "",
                        zipCode: "",
                        city: "",
                        phone: "",

                        agreementChecked: false,

                        submitMessage: "Dziękujemy za rejestrację",
                    });
                }
            })
            .catch(err => console.error(err));
        }
        else
        {
            this.setState({
                submitMessage: "",
                submitHandle: true,
            });
        }
    };

    render() {
        const {name, surname,
            email, emailVal, login, loginVal, password, passwordVal, passwordConfirm, passwordConfirmVal,
            address, city, zipCode, phone, submitHandle, loginAvailable, emailAvailable, agreementChecked, submitMessage} = this.state;
        return (
            <>
                <Logo/>
                <section className="registration">
                    <div className="container lar-container">
                        {!submitMessage ?
                            <div className="registration-content">
                                <form className="registration-content-form"
                                      onSubmit={this.handleSubmit}>
                                    <legend>
                                        Rejestracja
                                    </legend>
                                    <h2>Dane personalne</h2>
                                    <section className="registration-content-form-sections">
                                        <label>Imię:
                                            <input type="text"
                                                   placeholder="Name"
                                                   name="name"
                                                   value={name}
                                                   onChange={this.handleChangeName}/>
                                        </label>
                                        <label>Nazwisko:
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
                                        {(!emailVal && submitHandle) &&
                                        <div className="form-error">
                                            Podany email jest nieprawidłowy
                                        </div>}
                                        {(submitHandle && !emailAvailable && emailVal) &&
                                        <div className="form-error">
                                            Podany email już istnieje w bazie
                                        </div>}
                                        {((emailAvailable && emailVal) || !submitHandle) &&
                                        <div className="form-error-invisible"/>}
                                    </section>
                                    <h2>Dane do logowania</h2>
                                    <section className="registration-content-form-sections">
                                        <label className="obligatory">Login:
                                            <span className="big-x2">*</span>
                                            <input type="text"
                                                   placeholder="Login"
                                                   name="login"
                                                   value={login}
                                                   onChange={this.handleChangeLogin}/>
                                        </label>
                                        {(!loginVal && submitHandle) &&
                                        <div className="form-error">
                                            Podany login jest nieprawidłowy
                                        </div>}
                                        {(submitHandle && !loginAvailable && loginVal) &&
                                        <div className="form-error">
                                            Login jest już zajęty
                                        </div>}
                                        {((loginAvailable && loginVal) || !submitHandle) &&
                                        <div className="form-error-invisible"/>}

                                        <label className="obligatory">Hasło:
                                            <span className="big-x2">*</span>
                                            <input type="password"
                                                   placeholder="Password"
                                                   name="password"
                                                   value={password}
                                                   onChange={this.handleChangePassword}/>
                                        </label>
                                        {(!passwordVal && submitHandle) ?
                                            <div className="form-error">
                                                Podane hasło jest nieprawidłowe
                                            </div> :
                                            <div className="form-error-invisible"/>}
                                        <label className="obligatory">Powtórz hasło:
                                            <span className="big-x2">*</span>
                                            <input type="password"
                                                   placeholder="Repeat password"
                                                   name="passwordConfirm"
                                                   value={passwordConfirm}
                                                   onChange={this.handleChangePasswordConfirm}/>
                                        </label>
                                        {(!passwordConfirmVal && submitHandle) ?
                                            <div className="form-error">
                                                Hasła muszą być takie same
                                            </div>:
                                            <div className="form-error-invisible"/>}
                                    </section>
                                    <h2>Dane kontaktowe</h2>
                                    <section className="registration-content-form-sections">
                                        <label>Adres zamieszkania:
                                            <input type="text"
                                                   placeholder="Address"
                                                   name="address"
                                                   value={address}
                                                   onChange={this.handleChangeAddress}/>
                                        </label>
                                        <label>Miasto:
                                            <input type="text"
                                                   placeholder="City"
                                                   name="city"
                                                   value={city}
                                                   onChange={this.handleChangeCity}/>
                                        </label>
                                        <label>Kod pocztowy:
                                            <input type="text"
                                                   placeholder="Zip code"
                                                   name="zipCode"
                                                   value={zipCode}
                                                   onChange={this.handleChangeZipCode}/>
                                        </label>
                                        <label>Telefon:
                                            <input type="text"
                                                   placeholder="Phone"
                                                   name="phone"
                                                   value={phone}
                                                   onChange={this.handleChangePhone}/>
                                        </label>
                                    </section>
                                    <h2>Zgody</h2>
                                    <section className="registration-content-form-sections">
                                        <div className="agreements">
                                            <input type="checkbox"
                                                   id="agreement"
                                                   onChange={this.handleChangeAgreement}/>
                                            <label className="registration-content-form-sections-left"
                                                   htmlFor="agreement">
                                                <p className="big-x2">*</p>
                                                <span/>
                                                <p>
                                                    Zapoznałem się z regulaminem sklepu internetowego i akceptuję jego
                                                    treść.
                                                </p>
                                            </label>
                                        </div>
                                        {(!agreementChecked && submitHandle) ?
                                            <div className="form-error">
                                                Zgoda jest obowiązkowa
                                            </div>:
                                            <div className="form-error-invisible"/>}
                                        <p>
                                            Pola oznaczone&nbsp;
                                            <span className="big-x1">*</span>
                                            &nbsp;są obowiązkowe
                                        </p>
                                    </section>
                                    <div className="lar-content-form-btns">
                                        <Link to="/login">do logowania</Link>
                                        <input type="submit" value="zarejestruj"/>
                                    </div>
                                </form>
                            </div>:
                            <SubmitLar submitMessage={submitMessage}/>}
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}

export default Registration;