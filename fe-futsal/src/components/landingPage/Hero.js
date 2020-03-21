import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Hero extends Component {
    render() {
        return (
            <div>
                <div id="hero-area" className="hero-area-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="contents text-center">
                                    <h2 className="head-title wow fadeInUp">Futsal</h2>
                                    <div className="header-button wow fadeInUp" data-wow-delay="0.3s">
                                        <Link to="/login" className="btn btn-common btn-md">Book now</Link>
                                    </div>
                                </div>
                                <div className="img-thumb text-center wow fadeInUp" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="assets/img/hero-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
