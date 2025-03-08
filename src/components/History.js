import React from 'react';
import { MdHeight } from 'react-icons/md';

const History = () => {
  return (
    <div style={styles.historyContainer}>
       <div style={styles.textContainer}>
        <h2>History of UFC</h2>
        <p>The Ultimate Fighting Championship (UFC) is the world's premier mixed martial arts organization.</p>
        <p>Dana White has been the president of the UFC since 2001. Under his leadership, the UFC has grown into a global sports phenomenon, bringing MMA into the mainstream. White played a pivotal role in transforming the UFC from a struggling organization into a multi-billion-dollar enterprise.</p>
        <p>In 2001, White, along with Lorenzo and Frank Fertitta, purchased the UFC for $2 million. Through strategic marketing, major broadcasting deals, and high-profile fights, the UFC became the leading MMA promotion worldwide. White was instrumental in introducing The Ultimate Fighter reality show, which played a significant role in the sport’s mainstream success.</p>
        <p>Today, UFC events are held worldwide, featuring elite fighters in various weight classes. The promotion has expanded to include female divisions, and stars like Conor McGregor, Ronda Rousey, and Khabib Nurmagomedov have gained international fame under White’s leadership.</p>
      </div>
      <img 
        src="https://i.guim.co.uk/img/media/723bb6af12c9dae34a8cc9861d18196435f774df/0_96_2883_1731/master/2883.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75e66b941d89f48bb125a8f45d6697f4" 
        alt="Dana White" 
        style={styles.image} 
      />
    </div>
  );
};

const styles = {
  historyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    textAlign: 'left',
  },
  textContainer: {
    flex: 1,
    paddingRight: '20px',
  },
  image: {
    width: '400px',
    height:'400px',
    borderRadius: '10px',
  },
};

export default History;