import React from "react";

// Return Footer component
function Footer() {
    return (
        <React.Fragment>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Tour Review</h5>
                            <p className="grey-text text-lighten-4">Rate our tours. Tell us your adventure story</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">About us</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2024 Tour Review
                        <a className="grey-text text-lighten-4 right" href="https://vykauppinen.netlify.app">Vy
                            Kauppinen</a>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;