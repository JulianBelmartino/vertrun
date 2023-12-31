import {React, useEffect, useState  }from 'react';
import MonthsAct from '../monthsAct/monthsAct.jsx'
import { useSelector,useDispatch } from 'react-redux';
import {getActivities} from '../../actions/actions.js'
import styles from './monthList.module.css'

const MonthList = () => {
  const activities = useSelector((state) => state.allActivities)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getActivities());
    setLoading(false);
    }, [dispatch]);
 
    return (
        <div className={styles.container}>
        <div className={styles.header}>
        <h1 className={styles.headerTitles}>Name</h1>
        <h1 className={styles.headerTitles}>Date</h1>
        <h1 className={styles.headerTitles}>Distance</h1>
        <h1 className={styles.headerTitles}>Time</h1>
        <h1 className={styles.headerTitles}>Elevation</h1>
        </div>
        {
           loading ? (   
            <img className={styles.img} src='/circle-loading.gif' alt='loading'/>
          ) : (
        activities.map((activity) => (
        <MonthsAct 
                     key={activity.id}
                     id={activity.id}
                     name={activity.name}
                     date={activity.start_date}
                     distance={activity.distance}
                     time={activity.elapsed_time}
                     elevationGain={activity.total_elevation_gain}
            />
        ))
          )}
      
        </div>
    );
};

export default MonthList;