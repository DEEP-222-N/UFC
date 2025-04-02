import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <style>
        {`
          .navbar {
            background: linear-gradient(to right, #000000, #1a1a1a);
            padding: 15px 30px;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          }

          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            font-size: 2rem;
            font-weight: 900;
            color: #FFD700;
            text-decoration: none;
            letter-spacing: 2px;
            text-transform: uppercase;
          }

          .menu {
            display: flex;
            gap: 30px;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .menu li a {
            color: #ffffff;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 8px 0;
            position: relative;
            transition: color 0.3s ease;
          }

          .menu li a:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: #FFD700;
            transition: width 0.3s ease;
          }

          .menu li a:hover {
            color: #FFD700;
          }

          .menu li a:hover:before {
            width: 100%;
          }

          .search-container {
            position: relative;
            width: 250px;
          }

          .search-bar {
            width: 100%;
            padding: 10px 15px;
            border-radius: 25px;
            border: 2px solid #FFD700;
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          .search-bar::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }

          .search-bar:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
          }

          .menu-button {
            display: none;
            background: none;
            border: none;
            color: #FFD700;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 5px;
          }

          @media (max-width: 968px) {
            .menu-button {
              display: block;
            }

            .nav-container {
              position: relative;
            }

            .menu {
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              flex-direction: column;
              background: #000000;
              padding: 20px;
              gap: 15px;
              border-top: 2px solid #FFD700;
              transform: scaleY(0);
              transform-origin: top;
              transition: transform 0.3s ease;
              opacity: 0;
            }

            .menu.open {
              transform: scaleY(1);
              opacity: 1;
            }

            .search-container {
              width: 200px;
            }
          }

          @media (max-width: 576px) {
            .navbar {
              padding: 15px;
            }

            .logo {
              font-size: 1.5rem;
            }

            .search-container {
              width: 150px;
            }

            .search-bar {
              padding: 8px 12px;
              font-size: 0.9rem;
            }
          }
        `}
      </style>
      <div className="nav-container">
        <a href="/" className="logo">UFC</a>
        <button 
          className="menu-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/">History</a></li>
          <li><a href="#champions">Champions</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar"
            aria-label="Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;