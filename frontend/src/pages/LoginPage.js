import React, {useState} from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import HTTP from "../httpClient";
import {useNavigate} from "react-router-dom";

// Handle user login and input validation with JWT-Token
export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // When use input values. Save it to formData
    const formData = {
        username: username,
        password: password
    };

    // When click submit button. Send Post request to log in
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent reload
        try {
            const response = await HTTP.post(`${process.env.REACT_APP_JWT_API_TOKEN}`, formData)
            // If response.status == 200
            console.log(response.data)
            navigate('/') // Navigate to Home
            // Save token and user's info
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user_email', response.data.user_email);
            localStorage.setItem('user_nicename', response.data.user_nicename);
            localStorage.setItem('user_display_name', response.data.user_display_name);
        } catch (error) {
            // Handle Login errors
            if (error.response.status === 401 || error.response.status === 403) {
                alert("Username or password is incorrect"); // For security, avoid stating which one is wrong
            } else {
                console.log("Cannot execute login request", error)
            }
        }
    }
    return (
        <div>
            <Navbar/>
            <div className="row">
                <form className="col s12" onSubmit={handleLogin}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                required={true}
                                id="user_name"
                                type="text"
                                className="validate"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="user_name">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                required={true}
                                id="password"
                                type="password"
                                className="validate"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}