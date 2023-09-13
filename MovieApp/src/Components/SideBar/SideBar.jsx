import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
  return (
    <>
      <nav>
        <ul>
          <div className='about-head'>
            <button><img alt='click' src='' /></button>
            <h2>Moviebox</h2>
          </div>
          <li><Link to='/'>Home</Link></li>
          <li className='active'>Movies</li>
          <li><Link to='#'>Tv Series</Link></li>
          <li><Link to='#'>Upcoming</Link></li>
          <span className='about-log'>
            Logout
          </span>
        </ul>
      </nav>
    </>
  )
};

export default Sidebar;