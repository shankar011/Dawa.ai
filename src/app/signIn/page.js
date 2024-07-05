import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import dawalogo from "./images/dawaa.png";


const Login = () => {

        

    return (
        <div >
                <Image src={dawalogo} alt="Cover" />
            <div className={styles.partner}>
                <div>        
                <h6>Our Partnership, <br/> Your Benefits</h6>
                    <p> Next Gen B2B Saas platform for health care <br /> professionals created by IITians & IIMs</p>
                </div>
              
                <div className={styles.right}>
                    <form>
                        <h3>Login Via e-mail address</h3>
                        <p>Email address</p>
                        <input type='text' /> <br />
                        <button>Login Via Mobile</button> <br />
                        <span>or</span> <br />
                        <button>Login Via Email</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login