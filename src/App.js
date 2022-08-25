import './App.css';
import Body from './screen/Body';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from './screen/Navbars';

function App() {
  return (
    <Router>
      <Navbars/>
      <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/bookmark' element={<Body/>} />
      </Routes>
    </Router>
  );
}

export default App;
