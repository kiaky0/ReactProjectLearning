import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home"
import AllHotels from './allhotels/AllHotels';
import Hotel from './hotel/Hotel';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<AllHotels />} />
        <Route path='/hotels/:id' element={<Hotel />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
