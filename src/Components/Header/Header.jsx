import React from 'react';
import './Header.css';
const Header = () => (
  <header className="header">
    <h1>Spark Blog</h1>
   <div className="search-wrapper">
  <input
    type="text"
    placeholder="🔍 Search articles by title, content, or keywords..."
    className="search-bar"
  />
</div>
  </header>
);

export default Header;
