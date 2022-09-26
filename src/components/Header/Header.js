import './Header.css';

import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink className='light-green' to='/189/227/185'>Light Green</NavLink>
      <NavLink className='navy-blue' to='/54/83/142'>Navy Blue</NavLink>
      <NavLink className='pink' to='/250/164/224'>Pink</NavLink>
    </header>
  );
}