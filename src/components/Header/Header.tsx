import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Download App Banner */}
      <div className="app-banner">
        <a href="#">Download Tokopedia App</a>
      </div>

      <div className="header-top">
        <div className="logo">
          <img src="/tokopedia-logo.svg" alt="Tokopedia" />
        </div>
        
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Cari di Tokopedia" 
            className="search-input"
          />
          <button className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
        </div>

        <div className="header-actions">
          <button className="cart-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
          
          <div className="profile-menu">
            <button 
              className="profile-button"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            
            {isProfileMenuOpen && (
              <div className="profile-dropdown">
                <a href="/login">Masuk</a>
                <a href="/register">Daftar</a>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <ul className="nav-list">
          <li><a href="/kategori">Kategori</a></li>
          <li><a href="/top-up">Top Up & Tagihan</a></li>
          <li><a href="/handphone">Handphone & Tablet</a></li>
          <li><a href="/elektronik">Elektronik</a></li>
          <li><a href="/fashion">Fashion</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
