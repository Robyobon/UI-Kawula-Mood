
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import HowToOrder from './pages/Howtoorder';
import MagazinePage from './pages/Magazinepage';
import Fotter from './components/Footter';
import Jagadgrey from './pages/JagadGrey';
import Login from './pages/Login';
import Creatacount from './pages/Creatacount';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/shop/jagadgrey" element={<Jagadgrey />} /> 
        <Route path='/howtoorder' element={<HowToOrder />} />
        <Route path='/magazine' element={<MagazinePage />} />
        <Route path='/jagadgrey' element={<Jagadgrey />} />
        <Route path='/login' element={<Login />} />
        <Route path='/creatacount' element={<Creatacount />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Fotter />
    </Router>
  );
}

export default App;
