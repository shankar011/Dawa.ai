

"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dawalogo from "../../../../public/images/dawaa.png";
import menu from "../../../../public/images/menu.png";
import styles from "./style.module.css";
import { useState } from 'react';


const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={dawalogo} />
        </div>

        <div className={styles.menu}>

          <button style={{ position: "relative" }} onClick={() => { toggleMenu() }}>
            <Image width="32" height="30" src={menu} alt='img' />
          </button>
          <div className={styles.hover}>
            <ul style={{ listStyle: "none", display: showMenu ? 'block' : "none" }}>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>About Us</a></li>
              <li><a href='/'>Offering</a></li>
              <li><a href='/'>Contact Us</a></li>
              <li>  <button>Join Us</button> </li>
              <li>  <button>Sign In</button>  </li>
            </ul>
          </div>

        </div>

        <div>
          <ul className={styles.unorderedlist}>
            <li className={styles.listitem}><Link href='#'>Home</Link></li>
            <li className={styles.listitem}><Link href='#'>About Us</Link></li>
            <li className={styles.listitem}><Link href='#'>Offering</Link></li>
            <li className={styles.listitem}><Link href='#'>Contact Us</Link></li>
            <li className={styles.listitem}>  <button><Link href="../../desksign"> Log In </Link> </button></li>
            <li className={styles.listitem}> <button> <Link href="../../signIn"> Sign In</Link>  </button>    </li>
          </ul>
        </div>
      </div>
      <h6>Our Partnership, <br /> Your Benefits</h6>
      <p className={styles.next}>Next Gen B2B SaaS platform for health care <br /> professionals created by IITians & IIM's</p>
      <button className={styles.join}><Link href="#"> Join Us</Link></button>
    </div>
  );
};

export default NavBar;
