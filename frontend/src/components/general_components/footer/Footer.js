import React, {Component} from 'react';
import "./_footer.scss"
import SocialMedia from "../social_media/SocialMedia";

class Footer extends Component
{
    render() {
        return (
            <>
                <footer>
                    <div className="container">
                        <div className="footer">
                            <section className="footer-empty"/>
                            <section className="footer-logo">
                                &copy; Copper Shop 2020
                            </section>
                            <section className="footer-social">
                                <SocialMedia/>
                            </section>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;