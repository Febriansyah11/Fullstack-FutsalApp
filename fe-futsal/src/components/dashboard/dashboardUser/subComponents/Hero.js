import React, {Component} from 'react';
import Particles from 'react-particles-js'
class Hero extends Component {
    render() {
        return (
            <div>
                <div id="hero-area" className="hero-area-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="contents text-center">
                                    <Particles
                                        params={{
                                            particles: {
                                                line_linked: {
                                                        color: "#8fb0f7",
                                                }
                                            }
                                        }}
                                    />
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
