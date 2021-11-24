import React from 'react';
import './App.css';
import {LoginPage} from "./scenes/LoginPage";
import MainLayout from "./components/Layouts/MainLayout";
import {Routes, Route, Navigate} from "react-router-dom";
import {AcceptToken} from "./components/AcceptToken";
import {PrivateRoute} from "./components/PrivateRoute";
import {useUserSummary} from "./utilities/hooks/useUserSummary";

function App() {
    const user = useUserSummary();
    return (
        <>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path={"/"} element={<PrivateRoute/>}>
                        <Route index element={
                            <>
                                {`Hello ${user?.username}!`}
                            </>
                        }/>
                    </Route>
                    <Route path={"login"} element={<LoginPage/>}/>
                    <Route path={"login/:token"} element={<AcceptToken/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
