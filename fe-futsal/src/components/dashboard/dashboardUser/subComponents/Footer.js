import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-3 col-xs-12">
                            </div>
                            <div className="col-lg-4 col-md-4 col-xs-12">
                                <div className="social-icon text-center">
                                    <a className="facebook" href="#"><i className="lni-facebook-filled"/></a>
                                    <a className="twitter" href="#"><i className="lni-twitter-filled"/></a>
                                    <a className="instagram" href="#"><i className="lni-instagram-filled"/></a>
                                    <a className="linkedin" href="#"><i className="lni-linkedin-filled"/></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-xs-12">
                                <p className="float-right">Designed and Developed by <a href="http://uideck.com"
                                                                                        rel="nofollow">Enigma Indonesia</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
