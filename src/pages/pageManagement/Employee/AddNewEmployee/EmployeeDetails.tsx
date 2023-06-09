import React, { useState } from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/EmployeeDetails.module.scss";
import { useFormContext } from "react-hook-form";
import { IFormValues } from "./interface";

const EmployeeDetails = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();
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

      <div className={styles.form}>
        <div className={styles.containerInput}>
          <div>
            <label htmlFor="department">Department</label>
            <select
              className={styles.select}
              {...register("department", { required: true })}
            >
              <option value="" disabled selected style={{ display: "none" }}>
                Choose Department
              </option>
              <option value="" className={styles.male}>
                N/A
              </option>
              <option value="4" className={styles.parttime}>
                Developer
              </option>
              <option value="3" className={styles.contract}>
                Quality Controjk
              </option>
              <option value="2" className={styles.contract}>
                Maintenance
              </option>
              <option value="1" className={styles.contract}>
                Business Development
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="positionId">Position</label>
            <select
              className={styles.select}
              {...register("positionId", { required: true })}
            >
              <option value="" disabled selected style={{ display: "none" }}>
                Choose Position
              </option>
              <option value="" className={styles.male}>
                N/A
              </option>
              <option value="3" className={styles.parttime}>
                Junior
              </option>
              <option value="2" className={styles.contract}>
                Vice manager
              </option>
              <option value="1" className={styles.contract}>
                Manager
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
      </div>
    </div>
  );
};

export default EmployeeDetails;
