import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [mapUrl, setMapUrl] = useState('');
  const [farmType, setFarmType] = useState('');

  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  const handleShowFarm = () => {
    if (latitude && longitude) {
      const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=18&size=600x400&maptype=satellite&key=${googleApiKey}`;
      setMapUrl(mapUrl);
      determineFarmType(latitude, longitude);
    } else {
      alert('Please enter both latitude and longitude.');
    }
  };

  const determineFarmType = (lat, lon) => {
    // Placeholder logic for farm type determination
    const randomType = Math.random() > 0.5 ? 'Tomato' : 'Melon';
    setFarmType(randomType);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Farm Type Identifier 🌾</h1>
        <p className={styles.description}>
         Enter the coordinates of a farm in Saudi Arabia to identify if it&apos;s a tomato or melon farm.
        </p>
        <div className={styles.grid}>
          <input
            type="text"
            placeholder="Enter Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Enter Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleShowFarm} className={styles.button}>
            Show Farm
          </button>
        </div>
        {mapUrl && <img src={mapUrl} alt="Farm Location" className={styles.map} />}
        {farmType && <h2 className={styles.result}>The farm is a {farmType} farm.</h2>}
      </main>
      <footer className={styles.footer}>
        <a href="https://www.omdena-pocs.com" target="_blank" rel="noopener noreferrer">
          Disclaimer: This is a POC & Not for Production Use
        </a>
      </footer>
    </div>
  );
}
