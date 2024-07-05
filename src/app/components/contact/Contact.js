
import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';

// import location from "../../../../public/images/location.png";
// import email from "../../../../public/images/email.png";
// import call from "../../../../public/images/call.png";

import calls from "../../../../public/images/calls.png";
import map from "../../../../public/images/map.png";
import mail from "../../../../public/images/mail.png";





const Contact = () => {
    return (
        <div className={styles.container}>
            <h1>CONTACT US</h1>
            <div className={styles.main}>
                <div className={styles.contact}>
                    <div>
                        <Image src={map} alt='img' />  <span>Location</span>
                        <p>
                      711, Main Street, Hingoli, 100111
                        </p>
                    </div>
                    <div>
                        <Image src={mail} alt='img' />
                        <span>Email</span>
                        <p>
                            deshmukhshankar121@gmail.com
                        </p>
                    </div>
                    <div>
                        <Image src={calls} alt='img' />
                        <span>Call</span>
                        <p>
                            +91 901XXXXX77
                        </p>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.924747117433!2d72.82697241478114!3d19.079025587089095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8d42f56f1d%3A0x5e1417f5af7c2c20!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1659970066474!5m2!1sen!2sin"
                        frameBorder="0" style={{ border: '0', padding: "10px", width: '100%', height: '250px' }} allowFullScreen></iframe>
                </div>

                <div className={styles.left_contact}>
                    <div className={styles.label}>
                        <div>
                            <p>Your Name</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Your Email</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.subject}>
                        <p>Subject</p>
                        <input type="text" />
                    </div>
                    <div className={styles.subject}>
                        <p>Message</p>
                        {/* <textarea cols="50" rows="10"></textarea> */}
                        <textarea cols="40" rows="5"></textarea>
                    </div>
                    <div className={styles.minput}>
                        <input type="text" />
                    </div>
                    <button className={styles.send}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
