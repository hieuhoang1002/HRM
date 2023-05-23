import React from "react";
import logo from "../../img/Rectangle 4.png";
import styles from "../scss/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.container}>
      {" "}
      <img src={logo} alt="logo" />
      <p>HR Management System</p>
    </div>
  );
};

export default Banner;
