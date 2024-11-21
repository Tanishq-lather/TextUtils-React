import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar bg-${props.mode}`} data-bs-theme={props.mode}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.el_1}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.el_2}</Link>
          </li> 
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact us</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Email</a></li>
              <li><a className="dropdown-item" href="/">Social media</a></li>
              <li><hr className="dropdown-divider"/>   Linkedin</li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>  */}
        </ul>       
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="Switch" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        </div>
      </div>
    </nav>
  );
}
