import React, {Component} from 'react';
import "./_social_media.scss"

class SocialMedia extends Component
{
    render() {
        return (
            <>
                <section className="social-media">
                    <i className="fab fa-2x fa-facebook-square"/>
                    <i className="fab fa-2x fa-instagram-square"/>
                    <i className="fab fa-2x fa-pinterest-square"/>
                </section>
            </>
        )
    }
}

export default SocialMedia;