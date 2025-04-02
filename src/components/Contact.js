import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formState);
  };

  return (
    <div className="contact-section">
      <style>
        {`
          .contact-section {
            padding: 60px 20px;
            background: #ffffff;
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .contact-section h2 {
            color: #000000;
            font-size: 2.5rem;
            font-weight: 800;
            text-transform: uppercase;
            margin-bottom: 40px;
            position: relative;
            padding-bottom: 15px;
            text-align: center;
          }

          .contact-section h2:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: #FFD700;
            border-radius: 2px;
          }

          .contact-form {
            width: 100%;
            max-width: 600px;
            background: #ffffff;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border: 1px solid #e0e0e0;
          }

          .form-group {
            margin-bottom: 25px;
            position: relative;
          }

          .form-label {
            position: absolute;
            left: 15px;
            top: -10px;
            background: #ffffff;
            padding: 0 8px;
            font-size: 0.9rem;
            color: #666;
            transition: all 0.3s ease;
          }

          .form-input {
            width: 100%;
            padding: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: #ffffff;
          }

          .form-input:focus {
            border-color: #FFD700;
            outline: none;
            box-shadow: 0 0 0 3px rgba(210, 10, 10, 0.1);
          }

          .form-textarea {
            width: 100%;
            padding: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            min-height: 150px;
            resize: vertical;
            transition: all 0.3s ease;
            background: #ffffff;
          }

          .form-textarea:focus {
            border-color: #FFD700;
            outline: none;
            box-shadow: 0 0 0 3px rgba(210, 10, 10, 0.1);
          }

          .submit-button {
            width: 100%;
            padding: 15px;
            background: #FFD700;
            color: black;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 10px;
          }

          .submit-button:hover {
            background:rgb(255, 187, 0);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(210, 10, 10, 0.3);
          }

          .submit-button:active {
            transform: translateY(0);
          }

          @media (max-width: 768px) {
            .contact-section {
              padding: 40px 15px;
            }

            .contact-form {
              padding: 25px;
            }

            .contact-section h2 {
              font-size: 2rem;
            }
          }
        `}
      </style>
      <h2>Contact Us For Becoming a MMA Fighter</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-input"
            value={formState.name}
            onChange={(e) => setFormState({...formState, name: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            value={formState.email}
            onChange={(e) => setFormState({...formState, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            className="form-textarea"
            value={formState.message}
            onChange={(e) => setFormState({...formState, message: e.target.value})}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;