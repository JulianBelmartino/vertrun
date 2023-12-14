import {React, useEffect }from 'react';
import MonthsAct from '../monthsAct/monthsAct.jsx'
import { useSelector,useDispatch  } from 'react-redux';
import {getActivities} from '../../actions/actions.js'


const MonthList = () => {
  const activities = useSelector((state) => state.allActivities)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getActivities());
    }, [dispatch]);
 console.log('monthlist', activities)
    return (
        <div>
        {activities.map((activity) => (
        <MonthsAct 
                      key={activity.id}
                     id={activity.id}
                     name={activity.name}
                     date={activity.start_date}
                     distance={activity.distance}
                     time={activity.elapsed_time}
                     elevationGain={activity.total_elevation_gain}
            />
        ))}
        </div>
    );
};

export default MonthList;