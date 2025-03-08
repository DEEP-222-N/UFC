import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2023 UFC. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
  },
};

export default Footer;