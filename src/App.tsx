import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile";
import Page404 from "./components/404/Page404";
import RecoveryPassword from "./components/RecoveryPassword/RecoveryPassword";
import NewPassword from "./components/NewPassword/NewPassword";
import SuperComponents from "./components/SuperComponents/SuperComponents";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path={'/*'} element={<Page404/>}/>

                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/recoveryPassword'} element={<RecoveryPassword/>}/>
                <Route path={'/newPassword'} element={<NewPassword/>}/>
                <Route path={'/profile'} element={<Profile/>}/>

                <Route path={'/superComponents'} element={<SuperComponents/>}/>
            </Routes>
        </div>
    );
}

export default App;
