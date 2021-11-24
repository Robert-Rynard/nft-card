import React from "react";
import image from "../images/image-avatar.png";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.user}>
      <img src={image} alt="Profile" />
      <span>Creation of Jules Wyvern</span>
    </div>
  );
};

export default User;
