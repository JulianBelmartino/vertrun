import axios from 'axios'

  const clientID = 118134;
  const clientSecret = "52e11efbae1513701e5c45d1fb056682bea4d508";
  const refreshToken = "821cf62a91f4485d0ce70663a58a29929b8fe109"
  const auth_link = "https://www.strava.com/oauth/token"
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`

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
    
        // Assuming activities have a 'date' property, adjust this based on your data structure
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Adding 1 since getMonth() returns a zero-based index
    
        // Initialize an object to store activities by month
        const activitiesByMonth = {
          [currentMonth]: [],
          [currentMonth - 1]: [],
          [currentMonth - 2]: [],
        };
    
        activities.forEach(activity => {
          const activityDate = new Date(activity.start_date); // Adjust this based on your data structure
          const activityMonth = activityDate.getMonth() + 1; // Adding 1 since getMonth() returns a zero-based index
    
          // Check if the activity's month is within the last three months
          if (Object.keys(activitiesByMonth).includes(String(activityMonth))) {
            // Add the "id" property to each activity object
            const activityWithId = { ...activity, id: activityMonth };
    
            // Push the activity to the array for the corresponding month
            activitiesByMonth[activityMonth].push(activityWithId);
          }
        });
    
   
    
        // Return the activities organized by month
        return activitiesByMonth;
      } catch (error) {
        console.error('Error fetching last three months activities:', error);
        return {};
      }
    }
    
    async function monthDetail(chosenMonth) {
      try {
        const activities = await fetchData();
    
        // Assuming activities have a 'date' property, adjust this based on your data structure
        const monthStart = new Date(new Date().getFullYear(), chosenMonth - 1, 1);
        const monthEnd = new Date(new Date().getFullYear(), chosenMonth, 0);
    
        const monthActivities = activities.filter(activity => {
          const activityDate = new Date(activity.start_date); // Adjust this based on your data structure
          return activityDate >= monthStart && activityDate <= monthEnd;
        });
        return monthActivities;
      } catch (error) {
        console.error('Error fetching month activities:', error);
      }
    }
    
    export { fetchData, threeLastMonths, monthDetail };
