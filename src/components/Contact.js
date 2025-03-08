import React from 'react';

const Contact = () => {
  return (
    <div style={styles.contact}>
      <h2>Contact Us</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <textarea placeholder="Message" style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  contact: {
    padding: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    height: '100px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Contact;