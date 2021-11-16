import React, { useState } from 'react'
import './Dropdown.css'

function Dropdown() {
  const [drop, setDrop] = useState(false);

  const toggleDropdown = () => {
    setDrop(!drop);
    console.log("dropdown")
  }

  return (
    <nav>
      <h3>navbar</h3>
      <ul>
        <li><a href="/">nav1</a></li>
        <li><a href="/dropdown">nav2</a></li>
        <li className="dropdown-btn" onClick={toggleDropdown}>
          navdropdown
          {drop && <NavDropdown />}
        </li>
      </ul>
    </nav>      
  )
}

export default Dropdown

const NavDropdown = () => {
  return (
    <div className="nav-dropdown">
      <NavItem item={"subnav1"} path={"/"} />
      <NavItem item={"subnav2"} path={"/"} />
      <NavItem item={"subnav3"} path={"/"} />
    </div>
  )
}

const NavItem = (props) => {
  const {item, path} = props;
  return (
    <div className="nav-item">
      <a href={path}>{item}</a>
    </div>
  )
}