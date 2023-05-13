import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to={'/login'}>login</NavLink>
            <NavLink to={'/registration'}>registration</NavLink>
            <NavLink to={'/recoveryPassword'}>forgot password?</NavLink>
            <NavLink to={'/newPassword'}>new password</NavLink>
            <NavLink to={'/profile'}>profile</NavLink>
            <NavLink to={'/superComponents'}>super components</NavLink>
        </div>
    );
};

export default Navigation;