import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav>
            <Link to="/" className="title">Home</Link>
            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}