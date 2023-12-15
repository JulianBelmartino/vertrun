import React from 'react';
import styles from './monthAct.module.css'
const monthsAct = ({name, date, distance ,time, elevationGain}) => {
   
    let formattedTime = ''
    const timeFormat = () => {
        const totalTimeInSeconds = time
        const hours = Math.floor(totalTimeInSeconds / 3600);
        const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
        const seconds = totalTimeInSeconds % 60;
        const correctedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        formattedTime = correctedTime
        return formattedTime;
      };

      const kilometers= (distance) =>(distance / 1000).toFixed(2);
      const dateFormat = (date) => date.split('T')[0];      
    return (
        <div className={styles.container}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.info}>{kilometers(distance)}km</h3>
        <h3 className={styles.info}>{dateFormat(date)}</h3>
        <h3 className={styles.info}>{timeFormat(time)}</h3>
        <h3 className={styles.info}>{elevationGain}ft</h3>
        </div>
    );
};

export default monthsAct;