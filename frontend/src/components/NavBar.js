import React, {useEffect, useState} from 'react';
import HTTP from "../httpClient";
import {useNavigate} from "react-router-dom";

// This contains Navigation Bar when user is not logged in
export function NormalNavBar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Tour Review</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/v1/login">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}
// This code validate current Token to display custom header
function Navbar() {
    // Get user's Token and user_display_name
    const [token, setToken] = useState(null);
    const [userDisplayName, setUserDisplayName] = useState(null);
    const [loading, setLoading] = useState(true);
    const [validToken, setValidToken] = useState(false);

    // If there's a current token stored in localStorage. Collect it to send to JWT validate API
    useEffect(() => {
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
        if(token){
            // Make post request to validate the token
            HTTP.post(`${process.env.REACT_APP_JWT_API_VALIDATE}`, {}, {headers:{"Authorization": "Bearer " + token}})
                .then((response) => {
                    // If the token is valid, we display user's name on Header
                    if (response.data.data.status === 200) {
                        setToken(localStorage.getItem("token"));
                        setUserDisplayName(localStorage.getItem("user_display_name"));
                        setLoading(false);
                        setValidToken(true); // Token is valid
                    }
                }).catch((error) => {
                    // Handling error
                console.log("Token expire or something is wrong", error);
                setLoading(false);
                setToken(null);
                setValidToken(false);
            })
        }
    })

    // Handle Log out feature
    const logOut = async (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_nicename');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_display_name');
        window.location.href = '/';// Reload to Home;
    };

    // If the token is valid
    if (validToken) {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Tour Review</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a>{userDisplayName}</a></li>
                        <li><a onClick={logOut}>Logout</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
    // If the token is expired or empty
    return <NormalNavBar />;
}

export default Navbar;