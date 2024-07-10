import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import GetPosts from './components/GetPosts';

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hello World
                    </p>
                    <p>
                        Welcome to Tour Review
                    </p>
                </header>
            </div>
            <div className="Tour">
                <GetPosts/>
            </div>
            <Footer/>

        </React.Fragment>
    );
}

export default App;
