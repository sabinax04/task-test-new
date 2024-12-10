
import './App.css';

import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Order from './Components/Order';
import Reservation from './Components/Reservation';
import Contact from './Components/Contact';
import PageNotFound404 from './Components/PageNotFound404';
function App() {
  return (
    <div className="App">
     
      {/* <div className='menu'>
      <Link to='/'>Home</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/order'>Order</Link>
      <Link to='/reservation'>Reservation</Link>
      <Link to='/contact'>Contact</Link>
      </div> */}
      <div className='menu'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/menu'>Menu</NavLink>
      <NavLink to='/order'>Order</NavLink>
      <NavLink to='/reservation'>Reservation</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      </div>

     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:menuId' element={<Menu />} />
        <Route path='/order' element={<Order />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound404 />} />
     </Routes>
    </div>
  );
}

export default App;
