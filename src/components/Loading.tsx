import React from "react";
import styles from "./scss/Loading.module.scss";

const Loading = ({ name }) => {
  return (
    <div
      className={
        name === "loadingEditEmployee"
          ? styles.loadingEditEmployee
          : (name = "loadingTable" ? styles.loadingTable : "")
      }
    >
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
