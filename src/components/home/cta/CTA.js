import React, {Component} from 'react';
import "./_cta.scss"
import {Link} from "react-router-dom";

class CTA extends Component
{
    render() {
        return (
            <>
                <section className="ctn">
                    <div className="container">
                        <Link className="ctn-button" to="/shop">do sklepu</Link>
                    </div>
                </section>
            </>
        )
    }
}

export default CTA;