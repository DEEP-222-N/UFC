import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>UFC</div>
      <ul style={styles.menu}>
        <li><a href="#about">About Us</a></li>
        <li><a href="#champions">Champions</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <input type="text" placeholder="Search..." style={styles.searchBar} />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  searchBar: {
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
  },
};

export default Navbar;