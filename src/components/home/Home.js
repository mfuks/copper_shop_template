import React, {Component} from 'react';
import Header from "./header/Header";
import Content from "./content/Content";

class Home extends Component
{
    render() {
        return (
            <>
                <Header/>
                <Content/>
            </>
        )
    }
}

export default Home;