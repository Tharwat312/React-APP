import React from 'react'
import styles from './About.module.css'
export default function About() {
    return <>
        <section className={`${styles.about_bg} text-white`}>
            <div className="container min-vh-100 d-flex align-items-center justify-content-center flex-column">
                <div className="section_title mb-5">
                    <div className={"header py-1"}>
                        <h1 className={'text-uppercase'}>about component</h1>
                    </div>
                    <div className={"header-line py-1 d-flex align-items-center justify-content-center "}>
                        <div className={styles.line}></div>
                        <i className="fa-solid fa-star mx-3"></i>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-md-6">
                        <p className={`px-4 fs-5 `}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p className={`px-4 fs-5 `}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}