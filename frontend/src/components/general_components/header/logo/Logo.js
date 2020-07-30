import React, {Component} from 'react';
import "./_logo.scss"
import LogoPlain from "./logo_plain/LogoPlain";

class Logo extends Component
{
    render() {
        return (
            <>
                <section className="logo">
                    <LogoPlain/>
                </section>
            </>
        )
    }
}

export default Logo;