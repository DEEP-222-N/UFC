import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <style>
        {`
          .footer {
            background: linear-gradient(to right, #000000, #1a1a1a);
            color: #ffffff;
            padding: 40px 20px;
            position: relative;
          }

          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            padding: 0 20px;
          }

          .footer-section {
            text-align: left;
          }

          .footer-section h3 {
            color: #FFD700;
            font-size: 1.2rem;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .footer-section p {
            color: #ffffff;
            line-height: 1.6;
            margin-bottom: 15px;
          }

          .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
          }

          .social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #1a1a1a;
            border: 2px solid #FFD700;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFD700;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            font-weight: bold;
          }

          .social-link:hover {
            background: #FFD700;
            color: #000000;
            transform: translateY(-3px);
          }

          .footer-bottom {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .footer-bottom p {
            color: #888;
            font-size: 0.9rem;
          }

          .quick-links {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .quick-links li {
            margin-bottom: 10px;
          }

          .quick-links a {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .quick-links a:hover {
            color: #FFD700;
          }

          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr;
              text-align: center;
            }

            .footer-section {
              text-align: center;
            }

            .social-links {
              justify-content: center;
            }
          }
        `}
      </style>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About UFC</h3>
          <p>The Ultimate Fighting Championship (UFC) is the premier mixed martial arts organization in the world, featuring the best fighters and biggest events.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#events">Events</a></li>
            <li><a href="#fighters">Fighters</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#rankings">Rankings</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <p>Follow us on social media for the latest updates and exclusive content.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/UFC/?locale=rw_RW" className="social-link" aria-label="Facebook">
              FB
            </a>
            <a href="https://x.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="social-link" aria-label="Twitter">
              TW
            </a>
            <a href="https://www.instagram.com/ufc/" className="social-link" aria-label="Instagram">
              IG
            </a>
            <a href="https://www.youtube.com/@ufc" className="social-link" aria-label="YouTube">
              YT
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UFC. All rights reserved.</p>
      </div>
    </footer>


  );
};

export default Footer;