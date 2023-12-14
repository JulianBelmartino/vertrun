import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import MonthList from './components/monthList/monthList.jsx';

function App() {
 
  return (
    <div className='App'>
    <Navbar /> 
    <Routes>
       <Route path='/detail' />
       <Route path='/' element={<MonthList/>} />
   </Routes>
   <Footer /> 

 </div>
  );
}

export default App;
