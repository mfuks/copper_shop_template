import React, {Component} from 'react';
import "../_lar.scss"
import "./_submit_lar.scss"
import {Link} from "react-router-dom";

class SubmitLar extends Component
{

    render() {
        return (
            <>
                <section className="lar-welcome-btns">
                    <div className="lar-container lar-welcome-btns-content">
                        <h2>{this.props.submitMessage}</h2>
                        <section className="lar-content-form-btns welcome-btn">
                            <Link to="/">do strony głównej</Link>
                            <Link to="/shop">do sklepu</Link>
                        </section>
                    </div>
                </section>
            </>
        )
    }
}

export default SubmitLar;