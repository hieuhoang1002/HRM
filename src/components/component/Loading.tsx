import React from "react";
import styles from "../scss/Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.LoadingContainer}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
