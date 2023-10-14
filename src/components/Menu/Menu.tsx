import './Menu.css'

function Menu() {

  return (
    <div className="Menu p-3">
      <nav>
        <ul className="flex text-2xl">
          <li className="m-3">
            Main
          </li>
          <li className="m-3">
            Settings
          </li>
          <li className="m-3">
            Feedback
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
