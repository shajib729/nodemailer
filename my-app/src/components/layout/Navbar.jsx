import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <nav className=" container">
                <a className="navbar-brand" href="/">REACT.APP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                </div>
                <NavLink className="btn btn-outline-light" to="/users/add" exact>Add User</NavLink>
            </nav>
        </div>
    )
}

export default Navbar
