import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav(){
    return (
        <header>
            <h2>
                <span role='img' aria-label='camera'>Fernanda Frers</span> 
            </h2>
            <nav className='navbar'>
                <div className='container-fluid'>
                <NavLink className='nav-link' activeClassName='active' isActive={ () => window.location.pathname === '/home' } to = '/home'>
                    Home
                </NavLink>
                <NavLink className='nav-link' activeClassName='active' isActive={ () => window.location.pathname === '/about' } to = '/about'>
                    About
                </NavLink>
                <NavLink className='nav-link' activeClassName='active' isActive={ () => window.location.pathname === '/portfolio' } to = '/portfolio'>
                    portfolio
                </NavLink>
                <NavLink className='nav-link' activeClassName='active' isActive={ () => window.location.pathname === '/contact' } to = '/contact'>
                    contact
                </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Nav