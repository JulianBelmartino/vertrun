import axios from 'axios'

  const clientID = process.env.REACT_APP_CLIENT_ID
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET
  const refreshToken = process.env.REACT_APP_REFRESH_TOKEN
  const auth_link = process.env.REACT_APP_AUTH_LINK
  const activities_link = process.env.REACT_APP_ACTIVITES_LINK

    async function fetchData() {
      try {
        const stravaAuthResponse = await axios.post(`${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`);
        let activitiesArray = []
     
        if (!stravaAuthResponse.data || !stravaAuthResponse.data.access_token) {
          console.error('Error fetching Strava token:', stravaAuthResponse);
          return;
        }
  
        const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse.data.access_token}`);
        stravaActivityResponse.data.forEach(activity => {
          activitiesArray.push(activity)
        });
        
       return activitiesArray
        } catch (error) {
        console.error('Error fetching data:', error);
       
      }
    }
    async function threeLastMonths() {
      try {
        const activities = await fetchData();
    
       
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; 
        
        
        const activitiesByMonth = {
          [currentMonth]: [],
          [currentMonth - 1 === 0 ? "12" : currentMonth - 1]: [],
          [currentMonth - 2 === -1 ? 11 : currentMonth - 2]: [],
        };

        

      console.log('keys:', activitiesByMonth)
        activities.forEach(activity => {
          const activityDate = new Date(activity.start_date); 
          const activityMonth = activityDate.getMonth() + 1; 
          
         
          if (Object.keys(activitiesByMonth).includes(String(activityMonth))) {
            const activityWithId = { ...activity, id: activityMonth };
            activitiesByMonth[activityMonth].push(activityWithId);
          }
        });
        
        return activitiesByMonth;
      } catch (error) {
        console.error('Error fetching last three months activities:', error);
        return {};
      }
    }
    
    async function monthDetail(chosenMonth) {
      try {
        const activities = await fetchData();
       
        
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // January is 0, so add 1 to get the actual month
        
        let yearToCheck = currentYear;
        let monthToCheck = chosenMonth;
        
        // If chosen month is greater than the current month, adjust the year
        if (chosenMonth > currentMonth) {
          yearToCheck = currentYear - 1; // Adjust to the previous year
        }
        
        const monthStart = new Date(yearToCheck, monthToCheck - 1, 1);
        const monthEnd = new Date(yearToCheck, monthToCheck, 0);
        
        const monthActivities = activities.filter(activity => {
          const activityDate = new Date(activity.start_date); 
          return activityDate >= monthStart && activityDate <= monthEnd;
        });
        return monthActivities;
      } catch (error) {
        console.error('Error fetching month activities:', error);
      }
    }
    
    export { fetchData, threeLastMonths, monthDetail };
