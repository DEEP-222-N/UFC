import React from 'react';

const Champions = () => {
  const champions = [
    { 
      name: 'Jon Jones', 
      record: '28-1-1', 
      division: 'Heavyweight', 
      image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/JONES_JON_L_BELT_11-16.png?itok=CUPv7ubQ' 
    },
    { 
      name: 'Alex Pereira', 
      record: '12-2-0', 
      division: 'Light Heavyweight', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg55JkpzWtYC2z_fESsDMk9Oqn_ycqLjn8xw&s' 
    },
    { 
      name: 'Belal Muhammad', 
      record: '24-3-1', 
      division: 'Welterweight', 
      image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/MUHAMMAD_BELAL_L_BELTMOCK.png?itok=KkpJDuuw' 
    },
    { 
      name: 'Dricus du Plessis', 
      record: '23-2-0', 
      division: 'Middleweight', 
      image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-02/DU_PLESSIS_DRICUS_L_BELT_02-08.png?itok=MZTU4b4p' 
    },
    { 
      name: 'Islam Makhachev', 
      record: '27-1-0', 
      division: 'Lightweight', 
      image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/7/MAKHACHEV_ISLAM_L_BELT_01-18.png?itok=VptniX86' 
    },
    { 
      name: 'Ilia Topuria', 
      record: '15-0-0', 
      division: 'Featherweight', 
      image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/TOPURIA_ILIA_L_BELT_10-26.png?itok=4a1uyWfc' 
    },
    { 
      name: 'Merab Dvalishvili', 
      record: '19-4-0', 
      division: 'Bantamweight', 
      image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/7/DVALISHVILI_MERAB_L_BELT_01-18.png?itok=6d15Ml6s' 
    }
  ];

  return (
    <div style={styles.champions}>
      <h2>Current Champions</h2>
      <div style={styles.championList}>
        {champions.map((champ, index) => (
          <div key={index} style={styles.champion}>
            <img src={champ.image} alt={champ.name} style={styles.image} />
            <h3>{champ.name}</h3>
            <p><strong>Record:</strong> {champ.record}</p>
            <p><strong>Division:</strong> {champ.division}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  champions: {
    padding: '20px',
    textAlign: 'center',
  },
  championList: {
    display: 'flex',
    flexWrap: 'wrap', // Allows multiple rows
    justifyContent: 'center',
    gap: '40px',
  },
  champion: {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '220px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};

export default Champions;
