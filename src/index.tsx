import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {defaultTheme} from "./utilities/themes/defaultTheme";
import AuthProvider from "./utilities/providers/AuthProvider";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <Router>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
