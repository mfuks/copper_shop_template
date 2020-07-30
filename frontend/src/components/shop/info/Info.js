import React, {Component} from 'react';
import "./_info.scss"
import SocialMedia from "../../general_components/social_media/SocialMedia";

class Info extends Component
{
    render() {
        return (
            <>
                <section className="info">
                    <div className="container info-cont">
                        <div className="info-content">
                            <section className="info-content-info-1 ic">
                                <header>
                                    informacje
                                </header>
                                <ul className="info-content-info-section">
                                    <li>
                                        Polityka prywatności RODO
                                    </li>
                                    <li>
                                        Regulamin sklepu
                                    </li>
                                    <li>
                                        Reklamacje i zwroty
                                    </li>
                                </ul>
                            </section>
                            <section className="info-content-info-2 ic">
                                <header>
                                    &nbsp;
                                </header>
                                <ul className="info-content-info-section">
                                    <li>
                                        Formy dostawy
                                    </li>
                                    <li>
                                        Formy płatności
                                    </li>
                                    <li>
                                        Dane do przelewu
                                    </li>
                                </ul>
                            </section>
                            <section className="info-content-contact ic">
                                <header>
                                    skontaktuj się z nami
                                </header>
                                <div className="info-content-contact-section">
                                    <p>+48 342 549 320</p>
                                    <p>coppershop@shop.pl</p>
                                    <p>pn-pt 08:00-16:00</p>
                                </div>
                            </section>
                            <section className="info-content-social-section ic">
                                <header>
                                    social media
                                </header>
                                <div className="info-content-social-section">
                                   <SocialMedia/>
                                </div>
                            </section>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default Info;