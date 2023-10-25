import React from "react";
import styles from "./navbar.module.css";
import { Logo } from "../../assets/icons";
import Avatar from "../../assets/images/avatar.png";
function Profile() {
  return (
    <div className={styles.profileCapsule}>
      <div className={styles.avatarContainer}>
        <img src={Avatar} alt=" " className={styles.avatarImage} />
      </div>
      <p>Siddharth Jain</p>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className={styles.root}>
      <Logo />
      <Profile />
    </nav>
  );
}
