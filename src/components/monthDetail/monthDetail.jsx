import {React, useEffect }from 'react';
import MonthsAct from '../monthsAct/monthsAct.jsx'
import { useSelector,useDispatch  } from 'react-redux';
import {getMonthDetail} from '../../actions/actions.js'
import { useParams } from 'react-router-dom';
import styles from './monthDetail.module.css'
import { useState } from 'react';

const MonthDetail = () => {
  const activities = useSelector((state) => state.monthlyActivities)
  const dispatch = useDispatch()
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(null);
        setLoading(true);
  
        await dispatch(getMonthDetail(id));
  
        const fetchedData = activities
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [dispatch, id, activities]);
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

        )))}
        </div>
    );
};

export default MonthDetail;