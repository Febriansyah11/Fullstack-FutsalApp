import React, {Component} from 'react';

class Team extends Component {
    render() {
        return (
            <div>
                <section id="team" className="section-padding text-center">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Meet our team</h2>
                            <p>A desire to help and empower others between community contributors in
                                technology began to grow in 2020.</p>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="team-item text-center wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="team-img">
                                        <img className="img-fluid" src="assets/img/team/daniel.png" alt=""/>
                                        <div className="team-overlay">
                                            <div className="overlay-social-icon text-center">
                                                <ul className="social-icons">
                                                    <li><a href="#"><i className="lni-facebook-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-twitter-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-instagram-filled"
                                                                       aria-hidden="true"/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <h3><a href="#">Juan Daniel</a></h3>
                                        <p>Fullstack Engineer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="team-item text-center wow fadeInRight" data-wow-delay="0.6s">
                                    <div className="team-img">
                                        <img className="img-fluid" src="assets/img/team/febri.jpg" alt=""/>
                                        <div className="team-overlay">
                                            <div className="overlay-social-icon text-center">
                                                <ul className="social-icons">
                                                    <li><a href="#"><i className="lni-facebook-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-twitter-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-instagram-filled"
                                                                       aria-hidden="true"/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-text"  >
                                        <h3><a href="#">Febriansyah</a></h3>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="team-item text-center wow fadeInRight" data-wow-delay="0.9s">
                                    <div className="team-img">
                                        <img className="img-fluid" src="assets/img/team/bayu.jpg" alt=""/>
                                        <div className="team-overlay">
                                            <div className="overlay-social-icon text-center">
                                                <ul className="social-icons">
                                                    <li><a href="#"><i className="lni-facebook-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-twitter-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-instagram-filled"
                                                                       aria-hidden="true"/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <h3><a href="#">Bayu</a></h3>
                                        <p>Backend Developer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="team-item text-center wow fadeInRight" data-wow-delay="1.2s">
                                    <div className="team-img">
                                        <img className="img-fluid" src="assets/img/team/billy.jpg" alt=""/>
                                        <div className="team-overlay">
                                            <div className="overlay-social-icon text-center">
                                                <ul className="social-icons">
                                                    <li><a href="#"><i className="lni-facebook-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-twitter-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-instagram-filled"
                                                                       aria-hidden="true"/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <h3><a href="#">Bill Chatra Cham</a></h3>
                                        <p>Backend Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="team-item text-center wow fadeInRight" data-wow-delay="1.2s">
                                    <div className="team-img">
                                        <img className="img-fluid" src="assets/img/team/josua.jpg" alt=""/>
                                        <div className="team-overlay">
                                            <div className="overlay-social-icon text-center">
                                                <ul className="social-icons">
                                                    <li><a href="#"><i className="lni-facebook-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-twitter-filled"
                                                                       aria-hidden="true"/></a></li>
                                                    <li><a href="#"><i className="lni-instagram-filled"
                                                                       aria-hidden="true"/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <h3><a href="#">Joshua Sitanggang</a></h3>
                                        <p>Mobile Developer</p>
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

export default Team;
