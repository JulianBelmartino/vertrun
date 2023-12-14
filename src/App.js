import './App.css';
import {Routes, Route} from 'react-router-dom';
//import Lista from './components/monthList/monthList.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  const clientID = 118134;
  const clientSecret = "52e11efbae1513701e5c45d1fb056682bea4d508";
  const refreshToken = "bfce088ed2bfdba47fefaa2cfd0307733fcbee9f"
  const auth_link = "https://www.strava.com/oauth/token"
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`


useEffect(() => {
  async function fetchData() {
    const stravaAuthResponse = await axios.all([
      axios.post(`${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
    ]);
    const stravaActivityResponse =  axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
    
    console.log(stravaActivityResponse[0].data.access_token)
   
}

  fetchData();
}, []);

  return (
    <div className='App'>
    <Navbar /> 
    <Routes>
       <Route path='/detail' />
       <Route path='/' />
   </Routes>
   <Footer /> 

 </div>
  );
}

export default App;
