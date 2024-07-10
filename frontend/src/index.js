import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import Materialize-CSS and JS
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import $ from 'jquery';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFoundPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/' element={<App/>}/>
                <Route path='/v1/login' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
