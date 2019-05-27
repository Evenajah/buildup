import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (


            <div className="Footer">
                {/*Footer*/}
                <a name="footer"></a>
                <footer className="page-footer font-small unique-color-dark  pt-4">
                    <div className="container" id="FooterID">
                        <div className="Contact text-center">Contact us</div>
                        <ul className="list-unstyled list-inline text-center">
                            <li className="list-inline-item">
                                <a className="btn-floating btn-fb mx-1" target="_blank" href="https://www.facebook.com/profile.php?id=100016013610631">
                                    <span className="iconSize"><i className="fab fa-facebook-f"></i></span>
                                </a>
                            </li>

                            &nbsp; &nbsp; &nbsp;

                            <li className="list-inline-item">
                                <a className="btn-floating btn-tw mx-1" target="_blank" href="https://gitlab.com/s59122201092">
                                    <span className="iconSize"><i className="fab fa-gitlab"></i></span>
                                </a>
                            </li>

                            &nbsp; &nbsp; &nbsp;

                            <li className="list-inline-item">
                                <a className="btn-floating btn-gplus mx-1" target="_blank" href="https://plus.google.com/u/0/">
                                    <span className="iconSize"><i className="fab fa-google-plus-g"></i></span>
                                </a>
                            </li>

                            &nbsp; &nbsp; &nbsp;


                            <li className="list-inline-item">
                                <a className="btn-floating btn-li mx-1" target="_blank" href="https://www.youtube.com/channel/UCFdghTb_LywZmiu4HNySw4A">
                                    <span className="iconSize"><i className="fab fa-youtube"></i></span>
                                </a>
                            </li>

                            &nbsp; &nbsp; &nbsp;


                            <li className="list-inline-item">
                                <a className="btn-floating btn-li mx-1" target="_blank" href="https://twitter.com/Boblennon41?lang=th">
                                    <span className="iconSize"><i class="fab fa-twitter"></i></span>
                                </a>
                            </li>

                            &nbsp; &nbsp; &nbsp;
                         

                        </ul>


                    </div>
                    <br />

                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                                <span className="iconSize" id="LocationAndTelMe">
                                    <i className="fas fa-map-marker-alt"></i>&nbsp; Bangkok Thailand 10140</span>
                            </a>
                        </li>

                        &nbsp;&nbsp;

                            <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                                <span className="iconSize" id="LocationAndTelMe">
                                    <i className="fas fa-phone"></i>&nbsp;+6691-880-3603</span>
                            </a>
                        </li>

                        &nbsp;&nbsp;

                            <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                                <span className="iconSize" id="LocationAndTelMeLast">
                                    <i class="fab fa-line"></i>&nbsp;@roymalifex</span>
                            </a>
                        </li>

                    </ul>


                    <div className="footer-copyright text-center py-3">

                        <span className="powered">&nbsp; Powered by

                        &nbsp;&nbsp;&nbsp;&nbsp;

                    <i className="fab fa-react"></i>

                            &nbsp;&nbsp;&nbsp;&nbsp;

                    <i className="fab fa-laravel"></i></span><br />

                        <a href="#">© 2018 Copyright: BuildUp!</a>
                    </div>
                </footer>
                {/*End Footer*/}
            </div>


        );
    }
}

export default Footer;