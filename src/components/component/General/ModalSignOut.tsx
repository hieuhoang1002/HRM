import React from "react";
import styles from "../../scss/General/ModalSignOut.module.scss";

const ModalSignOut = () => {
  return (
    <div
      className={styles.container}
      // style={{ display: "flex", flexDirection: "column" }}
    >
      <div className={styles.userName}>
        <div className={styles.avatar}>HH</div>
        <div className={styles.name}>hieu.hoangtrung</div>
      </div>

      <div className={styles.info}>
        <div className={styles.dev}>Developer</div>
        <div className={styles.id}>Staff ID:</div>
      </div>

      <button>Sign Out</button>
    </div>
  );
};

export default ModalSignOut;
