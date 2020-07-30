import React, {Component} from 'react';
import "./_social_media.scss"

class SocialMedia extends Component
{
    render() {
        return (
            <>
                <section className="social-media">
                    <a href="https://www.facebook.com/mojerekoczyny/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-2x fa-facebook-square"/>
                    </a>
                    <a href="https://www.instagram.com/mojerekoczyny/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-2x fa-instagram-square"/>
                    </a>
                    <a href="https://pin.it/bFDqYuV" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-2x fa-pinterest-square"/>
                    </a>
                </section>
            </>
        )
    }
}

export default SocialMedia;