import React from 'react';
import DanaWhiteImage from './dana.jpg';

const History = () => {
  return (
    <div className="history-section">
      <style>
        {`
          .history-section {
            background: #ffffff;
            padding: 80px 20px;
            position: relative;
            overflow: hidden;
          }

          .history-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;
          }

          .text-container {
            flex: 1;
            padding-right: 20px;
          }

          .text-container h2 {
            color: #000000;
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 30px;
            text-transform: uppercase;
            position: relative;
            padding-bottom: 15px;
          }

          .text-container h2:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 80px;
            height: 4px;
            background: #FFD700;
            border-radius: 2px;
          }

          .text-container p {
            color: #333333;
            line-height: 1.8;
            margin-bottom: 20px;
            font-size: 1.1rem;
          }

          .text-container p:last-child {
            margin-bottom: 0;
          }

          .image-container {
            flex: 0 0 500px;
            position: relative;
          }

          .history-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
          }

          .image-container:before {
            content: '';
            position: absolute;
            top: 20px;
            right: 20px;
            bottom: -20px;
            left: -20px;
            border: 3px solid #d20a0a;
            border-radius: 15px;
            z-index: -1;
          }

          .history-image:hover {
            transform: scale(1.02);
          }

          @media (max-width: 1024px) {
            .history-container {
              flex-direction: column;
              text-align: center;
            }

            .text-container {
              padding-right: 0;
            }

            .text-container h2:after {
              left: 50%;
              transform: translateX(-50%);
            }

            .image-container {
              flex: 0 0 auto;
              width: 100%;
              max-width: 500px;
              margin: 0 auto;
            }

            .history-image {
              height: auto;
            }
          }

          @media (max-width: 768px) {
            .history-section {
              padding: 40px 20px;
            }

            .text-container h2 {
              font-size: 2rem;
            }

            .text-container p {
              font-size: 1rem;
            }
          }
        `}
      </style>
      <div className="history-container">
        <div className="text-container">
          <h2>History of UFC</h2>
          <p>The Ultimate Fighting Championship (UFC) is the world's premier mixed martial arts organization.</p>
          <p>Dana White has been the president of the UFC since 2001. Under his leadership, the UFC has grown into a global sports phenomenon, bringing MMA into the mainstream. White played a pivotal role in transforming the UFC from a struggling organization into a multi-billion-dollar enterprise.</p>
          <p>In 2001, White, along with Lorenzo and Frank Fertitta, purchased the UFC for $2 million. Through strategic marketing, major broadcasting deals, and high-profile fights, the UFC became the leading MMA promotion worldwide. White was instrumental in introducing The Ultimate Fighter reality show, which played a significant role in the sport's mainstream success.</p>
          <p>Today, UFC events are held worldwide, featuring elite fighters in various weight classes. The promotion has expanded to include female divisions, and stars like Conor McGregor, Ronda Rousey, and Khabib Nurmagomedov have gained international fame under White's leadership.</p>
        </div>
        <div className="image-container">
          <img 
            src={DanaWhiteImage} 
            alt="Dana White" 
            className="history-image"
          />
        </div>
      </div>
    </div>
  );
};

export default History;