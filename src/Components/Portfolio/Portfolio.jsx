import React from 'react'
import styles from './Portfolio.module.css'
const images = require.context('../../assets/images/portfolio', true);
const imageList = images.keys().map((image) => images(image));
export default function Portfolio() {
    return <>
        <section className='min-vh-100'>
            <div className={`container ${styles.portfolio} d-flex align-items-center justify-content-center flex-column`}>
                <div className={`section-title mb-5 ${styles.main_color}`}>
                    <div className={"header py-1"}>
                        <h1 className={'text-uppercase'}>portfolio component</h1>
                    </div>
                    <div className={"header-line py-1 d-flex align-items-center justify-content-center "}>
                        <div className={styles.line}></div>
                        <i className="fa-solid fa-star mx-3"></i>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className="row gy-5 gx-5">
                    {imageList.map((image, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className={`${styles.card} position-relative`}>
                                    <img src={image} alt="image-1 for portfolio" className={`w-100`} />
                                    <div className={`${styles.overlay} d-flex align-items-center justify-content-center`}>
                                        <i className={`fa-solid fa-plus ${styles.icon}`} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {imageList.map((image, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className={`${styles.card} position-relative`}>
                                    <img src={image} alt="image-1 for portfolio" className={`w-100`} />
                                    <div className={`${styles.overlay} d-flex align-items-center justify-content-center`}>
                                        <i className={`fa-solid fa-plus ${styles.icon}`} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
}
