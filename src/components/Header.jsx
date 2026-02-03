import React from 'react';

const Header = () => (
    <header>
        <div className="search-area">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for movies, series..." />
        </div>
        <button className="auth-btn">ავტორიზაცია</button>
    </header>
);

export default Header;