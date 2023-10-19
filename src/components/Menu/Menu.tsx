import { NavLink } from 'react-router-dom';

import './Menu.css'

function Menu() {

  return (
    <div className="Menu p-3">
      <nav>
        <ul className="flex text-2xl">
          <li className="m-3">
            <NavLink to="/">Main</NavLink>
          </li>
          <li className="m-3">
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li className="m-3">
            <NavLink to="/feedback">Feedback</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu