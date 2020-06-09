import React, {Component} from 'react';
import "./_logo_plane.scss"
import {Link} from "react-router-dom";

class LogoPlain extends Component
{
    render() {
        return (
            <>
                <section className="logo-plain">
                    <div className="container logo-plain-container">
                        <section className="logo-plain-content">
                            <Link to="/">
                                <div className="logo-plain-content-img"/>
                            </Link>
                        </section>
                    </div>
                </section>
            </>
        )
    }
}

export default LogoPlain;