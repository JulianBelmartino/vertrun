import {React, useEffect,useState }from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import {getThreeMonths} from '../../actions/actions.js'
import { Link } from 'react-router-dom';
import styles from './monthStats.module.css'
import {monthNames} from '../../middleware/monthNames.js'

const MonthStats = () => {
  const activities = useSelector((state) => state.threeLastMonths);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getThreeMonths());
    setLoading(false);
  }, [dispatch]);

  
  const dist = (month) => {
    const hasData = activities[month] && activities[month].length > 0;


    const distTotal = hasData
      ? (activities[month].reduce((total, activity) => total + activity.distance, 0) / 1760).toFixed(2)
      : '0';
  
    return distTotal;
  };
  const elevation = (month) => {
    const hasData = activities[month] && activities[month].length > 0;
  
    if (!hasData) {
      return "0"
    }
  
    const elevationTotalInMeters = activities[month].reduce((total, activity) => total + activity.total_elevation_gain, 0);
    const elevationTotalInFeet = elevationTotalInMeters * 3.28084;
 
    const formattedElevation = elevationTotalInFeet.toFixed(2);
  
    return formattedElevation;
  };

  const time = (month) => {
    const hasData = activities[month] && activities[month].length > 0;
  
    if (!hasData) {
      return "0:00:00"
    }
  
    const totalTimeInSeconds = activities[month].reduce((total, activity) => total + activity.elapsed_time, 0);
  
    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = totalTimeInSeconds % 60;
  
    const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
    return formattedTime;
  };
  const monthSelector = Object.keys(activities)

  
return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Performance Last Trimester</h1>
      <div className={styles.containerMonth}>
      <div>
        <Link className={styles.month} to={`/monthDetail/${monthSelector[0]}`}><h1>{monthNames(monthSelector[0])}</h1></Link>
        <h3 className={styles.monthStats} >Distance: {dist(monthSelector[0])}ml</h3>
        <h3 className={styles.monthStats}>Elevation Gain: {elevation(monthSelector[0])}ft</h3>
        <h3 className={styles.monthStats}>Elapsed Time: {time(monthSelector[0])}</h3>
      </div>
      <div>
      <Link className={styles.month}  to={`/monthDetail/${monthSelector[1]}`}><h1>{monthNames(monthSelector[1])}</h1></Link>
        <h3 className={styles.monthStats}>Distance: {dist(monthSelector[1])}ml </h3>
        <h3 className={styles.monthStats}>Elevation Gain: {elevation(monthSelector[1])}ft</h3>
        <h3 className={styles.monthStats}>Elapsed Time: {time(monthSelector[1])}</h3>
      </div>
      <div>
      <Link className={styles.month}  to={`/monthDetail/${monthSelector[2]}`}><h1>{monthNames(monthSelector[2])}</h1></Link>
        <h3 className={styles.monthStats}>Distance: {dist(monthSelector[2])}ml </h3>
        <h3 className={styles.monthStats}>Elevation Gain: {elevation(monthSelector[2])}ft</h3>
        <h3 className={styles.monthStats}>Elapsed Time: {time(monthSelector[2])}</h3>
      </div>
      </div>
    </div>
  );
};

export default MonthStats;