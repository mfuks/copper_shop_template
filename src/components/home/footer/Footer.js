import React, {Component} from 'react';
import "./_footer.scss"

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
                                <i className="fab fa-2x fa-facebook-square"/>
                                <i className="fab fa-2x fa-instagram-square"/>
                                <i className="fab fa-2x fa-pinterest-square"/>
                            </section>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;