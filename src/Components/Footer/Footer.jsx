import React from 'react'
import styles from '../Footer/Footer.module.css'
export default function Footer() {
    return (
        <footer className={'text-white'}>
            <div className={styles.footer_content}>
                <div className={"container py-3"}>
                    <div className={"row py-5"}>
                        <div className={`col-md-4 text-center`}>
                            <h3 className='text-uppercase'>location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className={"col-md-4 text-center"}>
                            <h3 className={'text-uppercase mb-4'}>around the web</h3>
                            <div className={"icons d-flex align-items-center justify-content-center"}>
                                <div className={styles.icon}>
                                    <i className={"fa-brands fa-facebook"}></i>
                                </div>
                                <div className={styles.icon}>
                                    <i className={"fa-brands fa-twitter"}></i>
                                </div>
                                <div className={styles.icon}>
                                    <i className={"fa-brands fa-linkedin"}></i>
                                </div>
                                <div className={styles.icon}>
                                    <i className={"fa-solid fa-globe"}></i>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-4 text-center"}>
                            <h3 className={'text-uppercase'}>
                                about freelancer
                            </h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.copyright} py-4`}>
                <p className={'text-center m-0 fs-5'}>Copyright &#169; Tharwat's Website 2024</p>
            </div>
        </footer>
    )
}
