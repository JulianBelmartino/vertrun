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

export default fetchData;
