import React from "react";
import './navbar.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar()
{
    return(
    <nav className="nav">
        <Link to="/" className="home">
            TO
        </Link>
      
        <ul className="resume">
            <CustomLink to='/resume'>Resume</CustomLink>
        </ul>

        <ul className="aboutContact">
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
        </ul>
    </nav>
    )
}
function CustomLink({ to, children, ...props})
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    
    return (
        <li className={isActive  ? "active" : ""}>
            <Link 
            to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}