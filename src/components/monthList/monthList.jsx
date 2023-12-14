import React from 'react';
import MonthsAct from '../monthsAct/monthsAct.jsx'
import { useEffect } from 'react';
import { getActivities } from '../../services/stravaService.jsx';

const MonthList = () => {
    useEffect(() => {
        // Call the Strava API function
        const fetchActivities = async () => {
          try {
            const activities = await getActivities();
            console.log('Activities:', activities);
          } catch (error) {
            console.error('Error fetching activities:', error);
          }
        };
    
        fetchActivities();
      }, []); 
    
    return (
        <div>
        <MonthsAct />
        </div>
    );
};

export default MonthList;