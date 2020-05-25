import React, {Component} from 'react';
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "../general_components/footer/Footer";
import CTA from "./cta/CTA";

class Home extends Component
{
    render() {
        return (
            <>
                <Header/>
                <Content/>
                <CTA/>
                <Footer/>
            </>
        )
    }
}

export default Home;