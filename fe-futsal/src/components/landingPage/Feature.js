import React, {Component} from 'react';

class Feature extends Component {
    render() {
        return (
            <div>
                <div id="feature">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="text-wrapper">
                                    <div>
                                        <h2 className="title-hl wow fadeInLeft" data-wow-delay="0.3s">We are helping to
                                            grow  your business.</h2>
                                        <p className="mb-4">A digital studio specialising in User Experience &
                                            eCommerce, we combine innovation with digital craftsmanship to help brands
                                            fulfill their potential.</p>
                                        <a href="#" className="btn btn-common">More About Us</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 padding-none feature-bg">
                                <div className="feature-thumb">
                                    <div className="feature-item wow fadeInDown" data-wow-duration="1000ms"
                                         data-wow-delay="300ms">
                                        <div className="icon">
                                            <i className="lni-microphone"/>
                                        </div>
                                        <div className="feature-content">
                                            <h3>What we do</h3>
                                            <h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                                fugit, sed quia con- sequuntur magni dolores </h6>
                                        </div>
                                    </div>
                                    <div className="feature-item wow fadeInDown" data-wow-duration="1000ms"
                                         data-wow-delay="500ms">
                                        <div className="icon">
                                            <i className="lni-users"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3>Meet our team</h3>
                                            <h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                                fugit, sed quia con- sequuntur magni dolores </h6>
                                        </div>
                                    </div>
                                    <div className="feature-item wow fadeInDown" data-wow-duration="1000ms"
                                         data-wow-delay="700ms">
                                        <div className="icon">
                                            <i className="lni-basketball"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3>Our Creation</h3>
                                            <h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                                fugit, sed quia con- sequuntur magni dolores </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature;
