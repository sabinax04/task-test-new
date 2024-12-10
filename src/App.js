import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import About from './Router/About';
import WorkExperience from './Router/WorkExperience';
import Contact from './Router/Contact';
import Error from './Router/Error';
function App() {
  return (
    <div className="App">
      <div className='common'>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/workexperience'>Work Experience</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      </div>

     <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/workexperience' element={<WorkExperience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
     </Routes>
    </div>
  );
}

export default App;
