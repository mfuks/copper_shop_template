import React, {Component} from 'react';
import "./_submit_lar.scss"
import {Link} from "react-router-dom";

class SubmitLar extends Component
{

    render() {
        return (
            <>
                <section className="lar-home-btn">
                    <div className="lar-home-btn-content">
                        <h2>{this.props.submitMessage}</h2>
                        <div className="lar-content-form-btns">
                            <Link to="/">do strony głównej</Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default SubmitLar;