import React from 'react';
import notFound from "../static/404 Error-bro.png";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// This page is for 404 error code
function NotFound() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="container">
                <h2>Oops! You seem to be lost.</h2>
                <div className="row s12 m6">
                    <img className="responsive-img s6"
                         src={notFound}
                         alt="Page Not Found"
                    />
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default NotFound;