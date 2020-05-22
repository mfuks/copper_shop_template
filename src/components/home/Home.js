import React, {Component} from 'react';
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "../general_components/footer/Footer";
import CTN from "./ctn/CTN";

class Home extends Component
{
    render() {
        return (
            <>
                <Header/>
                <Content/>
                <CTN/>
                <Footer/>
            </>
        )
    }
}

export default Home;