import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
    <aside className="sidebar">
        <div className="logo"><img src="https://movix.ge/assets/img/logo.png" width="45" alt="Logo" /></div>
        <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className="fa-solid fa-house"></i><span>Home</span>
            </NavLink>
            <NavLink to="/movies" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className="fa-solid fa-film"></i><span>Movies</span>
            </NavLink>
            <NavLink to="/series" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className="fa-solid fa-tv"></i><span>Series</span>
            </NavLink>
            <NavLink to="/anime" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className="fa-solid fa-dragon"></i><span>Anime</span>
            </NavLink>
            <NavLink to="/requests" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <i className="fa-solid fa-message"></i><span>Requests</span>
            </NavLink>
        </nav>
        <div className="sidebar-footer">
            <i className="fa-brands fa-discord"></i>
            <i className="fa-brands fa-facebook"></i>
        </div>
    </aside>
);

export default Sidebar;