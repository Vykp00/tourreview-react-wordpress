import React from 'react';

// This contains Navigation Bar
// TODO: Render drop down button for login/sign up

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Tour Review</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a>About Us</a></li>
                    <li><a>Login</a></li>
                    <li><a>JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;