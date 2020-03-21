import React, {Component} from 'react';

class Service extends Component {
    render() {
        return (
            <div>
                <section id="services" className="section-padding bg-gray">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Our Services</h2>
                            <p>A desire to help and empower others between community contributors in
                                technology  began to grow in 2020.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="services-item wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="icon">
                                        <i className="lni-pencil"/>
                                    </div>
                                    <div className="services-content">
                                        <h3><a href="#">Content Writing</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis
                                            dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
                                    <div className="icon">
                                        <i className="lni-briefcase"/>
                                    </div>
                                    <div className="services-content">
                                        <h3><a href="#">Digital Marketing</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis
                                            dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
                                    <div className="icon">
                                        <i className="lni-cog"/>
                                    </div>
                                    <div className="services-content">
                                        <h3><a href="#">Web Development</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis
                                            dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="services-item wow fadeInRight" data-wow-delay="1.2s">
                                    <div className="icon">
                                        <i className="lni-mobile"/>
                                    </div>
                                    <div className="services-content">
                                        <h3><a href="#">IOS & Android</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis
                                            dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="services-item wow fadeInRight" data-wow-delay="1.5s">
                                    <div className="icon">
                                        <i className="lni-layers"/>
                                    </div>
                                    <div className="services-content">
                                        <h3><a href="#">UI/UX Design</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis
                                            dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="services-item wow fadeInRight" data-wow-delay="1.8s">
                                    <div className="icon">
                                        <i className="lni-rocket"/>
                                    </div>
                                    <div className="services-content">
                                        <h3><a href="#">Branding & Identity</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis
                                            dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Service;
