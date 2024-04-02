import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav>
            <Link to="/" className="title">Home</Link>
            <div className="menu">
            </div>
            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/userincentives">User Incentives</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}