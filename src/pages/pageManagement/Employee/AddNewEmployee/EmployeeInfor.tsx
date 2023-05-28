import React from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/EmployeeInfor.module.scss";

const EmployeeInfor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Personal Information</div>
        <div className={styles.required}>
          <span>
            Required (<span className={styles.star}>*</span>)
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfor;
