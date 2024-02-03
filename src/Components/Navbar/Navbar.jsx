import React, { useState } from 'react'
import styles from '../Navbar/Navbar.module.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
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
                            <Link to={""} className={`nav-link fw-bold text-uppercase text-white ${styles.active} p-2`} href="#">Home</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"about"} className={`nav-link fw-bold text-uppercase text-white p-2`} href="#">about</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"portfolio"} className={`nav-link fw-bold text-uppercase text-white p-2`} href="#">portfolio</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"contact"} className={`nav-link fw-bold text-uppercase text-white p-2`} href="#">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
