import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import MonthList from './components/monthList/monthList.jsx';
import MonthDetail from './components/monthDetail/monthDetail.jsx';
import MonthStats from './components/monthStats/monthStats.jsx';
function App() {
 
  return (
    <div className='App'>
    <Navbar /> 
    <Routes>
       <Route path='/monthStats' element={<MonthStats/>} />
       <Route path='/monthDetail/:id' element={<MonthDetail/>} />
       <Route path='/' element={<MonthList/>} />
   </Routes>
   <Footer /> 

 </div>
  );
}

export default App;
