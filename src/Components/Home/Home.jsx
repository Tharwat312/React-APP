import React from 'react'
import styles from '../Home/Home.module.css'
import image from '../../assets/images/avataaars.svg'
export default function Home() {
    return <>
        <header className={`text-white ${styles.header_bg}`}>
            <div className={"container min-vh-100 d-flex align-items-center justify-content-center flex-column"}>
                <img src={image} alt="" className={'w-25'}/>
                <div className={"header py-1"}>
                    <h1 className={'text-uppercase'}>start framework</h1>
                </div>
                <div className={"header-line py-1 w-25 d-flex align-items-center justify-content-center"}>
                    <div className={styles.line}></div>
                    <i className="fa-solid fa-star mx-3"></i>
                    <div className={styles.line}></div>
                </div>
                <p className={'py-3'}>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
    </>
}
