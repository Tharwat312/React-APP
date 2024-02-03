import React from 'react'
import styles from '../Navbar/Navbar.module.css'
import '../Navbar/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    const isClassActive = ({isActive}) => (isActive ? "active" : "");
    const navlink = `nav-link fw-bold text-uppercase text-white p-2`
    return (
        <nav className={`navbar navbar-expand-lg py-3 fixed-top ${styles.navbar}`}>
            <div className={"container"}>
                <Link to={""} className={"navbar-brand text-uppercase text-white fs-2 fw-bold"} href="#">react project</Link>
                <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"} />
                </button>
                <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className={"navbar-nav ms-auto mb-2 mb-lg-0"}>
                        <li className={"nav-item"}>
                            <NavLink to={""} className={`${navlink} ${isClassActive}`} href="#">Home</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to={"about"} className={`${navlink} ${isClassActive}`} href="#">about</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to={"portfolio"} className={`${navlink} ${isClassActive}`} href="#">portfolio</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to={"contact"} className={`${navlink} ${isClassActive}`} href="#">contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
