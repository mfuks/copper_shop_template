import React, {Component} from 'react';
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

class Home extends Component
{
    render() {
        return (
            <>
                <Header/>
                <Content/>
                <Footer/>
            </>
        )
    }
}

export default Home;