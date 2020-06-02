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
                                    <label>Imię*:
                                        <input type="text"
                                               placeholder="Name"/>
                                    </label>
                                    <label>E-mail*:
                                        <input type="text"
                                               placeholder="E-mail"/>
                                    </label>
                                    <label>Płeć:
                                        <select name="gender" placeholder="Gender">
                                            <option value="male">Mężczyzna</option>
                                            <option value="female">Kobieta</option>
                                        </select>
                                    </label>
                                    <label>Data urodzenia:
                                        <input type="date" placeholder="Date of birth"
                                               value=""
                                               min="1850-01-01"
                                               max=""/>
                                    </label>
                                </section>
                                <h2>Dane do logowania</h2>
                                <section className="registration-content-form-sections">
                                    <label>Login*:
                                        <input type="text"
                                               placeholder="Login"/>
                                    </label>
                                    <label>Hasło*:
                                        <input type="text"
                                               placeholder="Password"/>
                                    </label>
                                    <label>Powtórz hasło*:
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
                                    <label className="registration-content-form-sections-left">*
                                        <input type="checkbox"/>
                                        Zapoznałem się z regulaminem sklepu internetowego i akceptuję jego treść.
                                    </label>
                                    <label className="registration-content-form-sections-left">&nbsp;
                                        <input type="checkbox"/>
                                        Zapisz się do newslettera
                                    </label>
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