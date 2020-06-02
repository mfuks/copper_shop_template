import React, {Component} from 'react';
import "./../_lar.scss"
import "./_registration.scss"
import Logo from "../../general_components/header/logo/Logo";
import Footer from "../../general_components/footer/Footer";
import {Link} from "react-router-dom";

class Registration extends Component
{








    render() {
        return (
            <>
                <Logo/>
                <section className="registration">
                    <div className="container lar-cont">
                        <div className="registration-content">
                            <form className="registration-content-form">
                                <legend>
                                    Rejestracja
                                </legend>
                                <h2>Dane personalne</h2>
                                <section className="registration-content-form-sections">
                                    <label>Imię:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="Name"/>
                                    </label>
                                    <label>Nazwisko:
                                        <input type="text"
                                               placeholder="Surname"/>
                                    </label>
                                    <label>E-mail:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="E-mail"/>
                                    </label>
                                </section>
                                <h2>Dane do logowania</h2>
                                <section className="registration-content-form-sections">
                                    <label>Login:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="Login"/>
                                    </label>
                                    <label>Hasło:
                                        <span className="big-x2">*</span>
                                        <input type="text"
                                               placeholder="Password"/>
                                    </label>
                                    <label>Powtórz hasło:
                                        <span className="big-x2">
                                            *
                                        </span>
                                        <input type="text"
                                               placeholder="Repeat password"/>
                                    </label>
                                </section>
                                <h2>Dane kontaktowe</h2>
                                <section className="registration-content-form-sections">
                                    <label>Adres zamieszkania:
                                        <input type="text"
                                               placeholder="Address"/>
                                    </label>
                                    <label>Miasto:
                                        <input type="text"
                                               placeholder="City"/>
                                    </label>
                                    <label>Kod pocztowy:
                                        <input type="text"
                                               placeholder="Zip code"/>
                                    </label>
                                    <label>Telefon:
                                        <input type="text"
                                               placeholder="Phone"/>
                                    </label>
                                </section>
                                <h2>Zgody</h2>
                                <section className="registration-content-form-sections">
                                    <div>
                                        <input type="checkbox"
                                               id="agreement"/>
                                        <label className="registration-content-form-sections-left"
                                               htmlFor="agreement">
                                            <p className="big-x2">
                                                *
                                            </p>
                                            <span/>
                                            <p>
                                                Zapoznałem się z regulaminem sklepu internetowego i akceptuję jego treść.
                                            </p>
                                        </label>
                                    </div>
                                    <p>
                                        Pola oznaczone&nbsp;
                                        <span className="big-x1">*</span>
                                        &nbsp;są obowiązkowe
                                    </p>
                                </section>
                                <div className="lar-content-form-btns">
                                    <Link to="/registration">do logowania</Link>
                                    <input type="submit" value="zarejestruj"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}

export default Registration;