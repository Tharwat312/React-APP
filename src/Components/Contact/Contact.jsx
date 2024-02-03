import React, { useState } from 'react'
import styles from './Contact.module.css'
export default function Contact() {
    const [isFocused, setFocus] = useState({
        name: false,
        age: false,
        email: false,
        password: false,
    });
    const showLabel = (e) => {
        setFocus({ ...isFocused, [e.target.name]: true });
    }
    const hideLabel = (e) => {
        setFocus({ ...isFocused, [e.target.name]: false });
    }
    return (
        <section className='min-vh-100'>
            <div className={`container ${styles.contact} d-flex align-items-center justify-content-center flex-column`}>
                <div className={`section-title mb-5`}>
                    <div className={"header py-1"}>
                        <h1 className={'text-uppercase'}>contact component</h1>
                    </div>
                    <div className={"header-line py-1 d-flex align-items-center justify-content-center "}>
                        <div className={styles.line}></div>
                        <i className="fa-solid fa-star mx-3"></i>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className="inputs w-50 mx-auto mb-2">
                    <div>
                        <div className="position-relative mb-5">
                            <input type="text" className="form-control mb-2" name="name" id="floatingInputName" placeholder="Enter your Name" onFocus={showLabel} onBlur={hideLabel} />
                            <label htmlFor="floatingInputName" className={`${styles.label} ${isFocused.name ? styles.goUp : ""}`}>Name:</label>
                        </div>
                        <div className="position-relative mb-5">
                            <input type="number" className="form-control mb-2" name="age" id="floatingInputAge" placeholder="Enter your age" onFocus={showLabel} onBlur={hideLabel} />
                            <label htmlFor="floatingInputAge" className={`${styles.label} ${isFocused.age ? styles.goUp : ""}`} >Age:</label>
                        </div>
                        <div className="position-relative mb-5">
                        <input type="email" className="form-control mb-2" name="email" id="floatingInputEmail" placeholder="name@example.com" onFocus={showLabel} onBlur={hideLabel} />
                        <label htmlFor="floatingInputEmail" className={`${styles.label} ${isFocused.email ? styles.goUp : ""}`}>Email address:</label>
                        </div>
                        <div className="position-relative mb-3">
                        <input type="password" className="form-control mb-2" name="password" id="floatingPassword" placeholder="Password" onFocus={showLabel} onBlur={hideLabel} />
                        <label htmlFor="floatingPassword" className={`${styles.label} ${isFocused.password ? styles.goUp : ""}`}>Password:</label>
                        </div>
                    </div>
                </div>
                <a className='btn btn-info btn-lg text-capitalize text-white' href="" onClick={(e) => e.preventDefault()}>send message!</a>
            </div>
        </section>
    )
}
