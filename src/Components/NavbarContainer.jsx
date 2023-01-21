import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom'


const NavbarContainer = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark  ">
                <div className="container-fluid shadow-lg">
                    <Link className="navbar-brand text-white" to="/">Navbar</Link>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <Link className="nav-link a text-white" to="/">
                                Inicio
                            </Link>
                            <Link className="nav-link text-white" to="/new">
                                Nuevo
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>

        </>
    )
}

export { NavbarContainer }
