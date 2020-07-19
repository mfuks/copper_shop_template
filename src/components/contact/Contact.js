import React, {Component} from 'react';
import "./_contact.scss"
import Footer from "../general_components/footer/Footer";
import Form from "./form/Form";
import Header from "../general_components/header/Header";

class Contact extends Component
{

    render() {
        const {login, setClearLogin, setUserPanelStep, path} = this.props
        return (
            <>
                <Header login={login}
                        setClearLogin={setClearLogin}
                        setUserPanelStep={setUserPanelStep}
                        path={path}/>
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
                            <Form/>
                        </section>
                    </div>
                </section>



                <Footer/>
            </>
        )
    }
}

export default Contact;