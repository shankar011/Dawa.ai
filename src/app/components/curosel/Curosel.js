"use client";

import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';
import Image from 'next/image';
import styles from "./style.module.css";
import ciie from "../../../../public/img/ciie.png";
import sine from "../../../../public/img/sine.png";
import iimb from "../../../../public/img/iimb.png";
import catalyst from "../../../../public/img/catalyst.png";
import iitb from "../../../../public/img/iitbombay.png";
import ideas from "../../../../public/img/ideas.png";
import rsn from "../../../../public/img/rsn.png";
import bincube from "../../../../public/img/bincube.png";
import jic from "../../../../public/img/jic.png";

const Curosel = () => {
    useEffect(() => {
       
        if (typeof window !== 'undefined') {
            const myCarousel = new Carousel(document.getElementById('carouselExample'), {
                interval: 2000, 
                wrap: true, 
            });

            return () => {
                myCarousel.dispose(); 
            };
        }
    }, []);

    return (
        <div className={styles.container}>
            <h1>OUR INCUBATORS</h1>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src={ciie} width={300} height={200} alt="CIIE" />
                        <Image src={sine} width={300} height={200} alt="SINE" />
                        <Image src={iimb} width={300} height={200} alt="IIMB" />
                    </div>
                    <div className="carousel-item">
                        <Image src={catalyst} width={400} height={200} alt="Catalyst" />
                        <Image src={iitb} width={400} height={200} alt="IIT Bombay" />
                        <Image src={ideas} width={400} height={200} alt="Ideas" />
                    </div>
                    <div className="carousel-item">
                        <Image src={rsn} width={400} height={200} alt="RSN" />
                        <Image src={bincube} width={400} height={200} alt="BinCube" />
                        <Image src={jic} width={400} height={200} alt="JIC" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curosel;
