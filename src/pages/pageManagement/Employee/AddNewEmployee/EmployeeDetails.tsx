import React, { useState } from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/EmployeeDetails.module.scss";

const EmployeeDetails = () => {
  const [checked, setChecked] = useState<boolean>(true);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Employment Details</div>
        <div className={styles.required}>
          <span>
            Required (<span className={styles.star}>*</span>)
          </span>
        </div>
      </div>

      <hr />

      <form action="" className={styles.form}>
        <div className={styles.containerInput}>
          <div>
            <label htmlFor="tel">Department</label>
            <select className={styles.select}>
              <option value="" disabled selected style={{ display: "none" }}>
                Choose Department
              </option>
              <option value="" className={styles.male}>
                N/A
              </option>
              <option value="developer" className={styles.parttime}>
                Developer
              </option>
              <option value="qualityControjk" className={styles.contract}>
                Quality Controjk
              </option>
              <option value="eaintenance" className={styles.contract}>
                Maintenance
              </option>
              <option value="development" className={styles.contract}>
                Business Development
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="tel">Position</label>
            <select className={styles.select}>
              <option value="" disabled selected style={{ display: "none" }}>
                Choose Position
              </option>
              <option value="" className={styles.male}>
                N/A
              </option>
              <option value="junior" className={styles.parttime}>
                Junior
              </option>
              <option value="vice" className={styles.contract}>
                Vice manager
              </option>
              <option value="mangegev" className={styles.contract}>
                Manager
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="tel">Shift</label>
            <select className={styles.select}>
              <option value="" disabled selected style={{ display: "none" }}>
                Choose Shift
              </option>
              <option value="" className={styles.male}>
                N/A
              </option>
              <option value="junior" className={styles.parttime}>
                1
              </option>
              <option value="vice" className={styles.contract}>
                2
              </option>
            </select>
          </div>
        </div>

        <div className={styles.containerCheckbox}>
          <div>
            <input type="checkbox" onClick={(e) => setChecked(!checked)} />
            <span>Entitled OT</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Meal Allowance Paid</span>
          </div>
          <div>
            <input type="checkbox" checked={checked} disabled />
            <span>Operational Allowance Paid</span>
          </div>
          <div>
            <input type="checkbox" checked={checked} disabled />
            <span>Attendance Allowance Paid</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeDetails;
