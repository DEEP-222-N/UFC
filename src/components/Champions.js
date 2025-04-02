import React from 'react';
import JonJonesImage from './john_jones.png';
import AlexPereiraImage from './alex.jpeg';
import BelalMuhammadImage from './bella.png';
import DricusDuPlessisImage from './dru.png';
import IslamMakhachevImage from './islam.png';
import IliaTopuriaImage from './illa.png';
import MerabDvalishviliImage from './merab.png';
import AlexandrePantojaImage from './pant.avif';

const Champions = () => {
  const champions = [
    { 
      name: 'Jon Jones', 
      record: '28-1-1', 
      division: 'Heavyweight', 
      image: JonJonesImage
    },
    { 
      name: 'Alex Pereira', 
      record: '12-2-0', 
      division: 'Light Heavyweight', 
      image: AlexPereiraImage
    },
    { 
      name: 'Belal Muhammad', 
      record: '24-3-1', 
      division: 'Welterweight', 
      image: BelalMuhammadImage
    },
    { 
      name: 'Dricus du Plessis', 
      record: '23-2-0', 
      division: 'Middleweight', 
      image: DricusDuPlessisImage
    },
    { 
      name: 'Islam Makhachev', 
      record: '27-1-0', 
      division: 'Lightweight', 
      image: IslamMakhachevImage
    },
    { 
      name: 'Ilia Topuria', 
      record: '15-0-0', 
      division: 'Featherweight', 
      image: IliaTopuriaImage
    },
    { 
      name: 'Merab Dvalishvili', 
      record: '19-4-0', 
      division: 'Bantamweight', 
      image: MerabDvalishviliImage
    },
    { 
      name: 'Alexandre', 
      record: '29-5-0', 
      division: 'Flyweight', 
      image: AlexandrePantojaImage
    }
  ];

  return (
    <div className="champions-section">
      <style>
        {`
          .champions-section {
            padding: 20px 0;
            background: #ffffff;
            min-height: 100vh;
            width: 80%;
            margin: 0 auto;
          }

          .champions-section h2 {
            text-align: center;
            color: #000000;
            font-size: 3rem;
            font-weight: 800;
            text-transform: uppercase;
            margin-bottom: 20px;
            letter-spacing: 2px;
            text-shadow: none;
            position: relative;
            padding-bottom: 10px;
          }

          .champion-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            width: 100%;
            margin: 0 auto;
            padding: 10px;
          }

          .champion-card {
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border: 1px solid #e0e0e0;
            width: 100%;
            aspect-ratio: 3/4;
          }

          .champion-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          }

          .champion-image-container {
            position: relative;
            width: 100%;
            height: 70%;
            overflow: hidden;
            background-color: #ffffff;
          }

          .champion-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
          }

          .champion-info {
            padding: 12px;
            background: #ffffff;
            border-top: 1px solid #e0e0e0;
            height: 30%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .champion-name {
            color: #000000;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0 0 10px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .champion-detail {
            color: #333333;
            margin: 5px 0;
            font-size: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .champion-detail strong {
            color: #FFD700;
          }

          .division-tag {
            background:#FFD700;
            color: black;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }

          @media (max-width: 1200px) {
            .champion-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
          }

          @media (max-width: 768px) {
            .champions-section {
              width: 95%;
              padding: 15px 0;
            }

            .champions-section h2 {
              font-size: 2.2rem;
              margin-bottom: 15px;
            }

            .champion-grid {
              grid-template-columns: 1fr;
              gap: 12px;
              padding: 8px;
            }

            .champion-card {
              aspect-ratio: 16/9;
            }
          }
        `}
      </style>
      <h2>Current Champions</h2>
      <div className="champion-grid">
        {champions.map((champ, index) => (
          <div key={index} className="champion-card">
            <div className="division-tag">{champ.division}</div>
            <div className="champion-image-container">
              <img src={champ.image} alt={champ.name} className="champion-image" />
            </div>
            <div className="champion-info">
              <h3 className="champion-name">{champ.name}</h3>
              <div className="champion-detail">
                <strong>Record:</strong>
                <span>{champ.record}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Champions;
