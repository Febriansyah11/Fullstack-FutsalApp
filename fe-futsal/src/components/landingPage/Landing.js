import React, {Component} from 'react';
import Header from "./Header";
import Hero from "./Hero";
import Feature from "./Feature";
import Service from "./Service";
import Team from "./Team";
import Footer from "./Footer";

class Landing extends Component {
    render() {
        return (
            <div>
                <header id="header-wrap">
                    <Header/>
                    <Hero/>
                    <Feature/>
                    <Service/>
                    <Team/>
                    <Footer/>
                </header>
            </div>
        );
    }
}

export default Landing;
