import Home from './components/Home'
import Tinubu from './components/Tinubu'
import Buhari from './components/Buhari'
import Jonathan from './components/Jonathan'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Tinubu' element={<Tinubu/>}></Route>
          <Route path='/Buhari' element={<Buhari/>}></Route>
          <Route path='/Jonathan' element={<Jonathan/>}></Route>
        </Routes>
    </>
  );
}

export default App;
