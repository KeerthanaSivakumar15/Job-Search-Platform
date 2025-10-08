import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Portal from './Portal';
import Sidenav from './Sidenav';
import './Own.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import Profile from './Profile';
import Home from './Home';
import Resume from './Resume';
import Jobsearchpage from './Jobsearchpage';

function App() {
  return (
    <div className="App">
      {/* <Portal></Portal> */}


      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/MainPage" element={<MainPage></MainPage>} />
         <Route path="/Profile" element={<Profile></Profile>} />
          <Route path="/Home" element={<Home></Home>} />
           <Route path="/Resume" element={<Resume></Resume>} />
            <Route path="/Jobsearchpage" element={<Jobsearchpage></Jobsearchpage>} />
         
      </Routes>


    </div>
  );
}

export default App;
