import React, {Component} from 'react';
import "./_contact.scss"
import Navigation from "../general_components/header/navigation/Navigation";
import LogRegister from "../general_components/header/log_register/LogRegister";
import Footer from "../general_components/footer/Footer";

class Contact extends Component
{
    render() {
        return (
            <>
                <LogRegister/>
                <Navigation/>
                <section className="contact">
                    <div className="container">
                        <header className="contact-header">
                            <section className="contact-header-logo">

                            </section>
                            <section className="contact-header-title">
                                <p>
                                    Copper Shop
                                </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Lorem Ipsum
                                </p>
                            </section>
                        </header>
                        <section className="contact-content">
                            <section className="contact-content-address">
                                <div className="contact-content-address-img"/>
                                <div className="contact-content-address-data">
                                    <h3>
                                        Lorem
                                    </h3>
                                    <h3>
                                        <i className="fas fa-lg fa-home"/>
                                        ul. Lorem ipsum 6
                                    </h3>
                                    <h3>
                                        <i className="fas fa-lg fa-phone-alt"/>
                                        +48 342 549 320
                                    </h3>
                                    <h3>
                                        <i className="fas fa-lg fa-envelope"/>
                                        coppershop@shop.pl
                                    </h3>

                                </div>
                            </section>
                            <form className="contact-content-form">
                                <legend>
                                    Skontaktuj się z nami
                                </legend>
                                <section className="contact-content-form-section">
                                    <fieldset>
                                        <label form="contact-name">Twoje imię:</label>
                                        <input type="text" placeholder="Your name" id="contact-name"/>
                                        <label form="contact-email">E-mail:</label>
                                        <input type="text" placeholder="E-mail" id="contact-email"/>
                                    </fieldset>
                                    <fieldset>
                                        <label form="contact-message">Twoja wiadomość:</label>
                                        <textarea placeholder="Your message" id="message"/>
                                    </fieldset>
                                </section>
                                <input className="form-btn" type="submit" value="Wyślij wiadomość"/>
                            </form>
                        </section>
                    </div>
                </section>



                <Footer/>
            </>
        )
    }
}

export default Contact;