import React, { useState } from "react";
import styles from "./scss/EmployeeDetails.module.scss";
import { useFormContext } from "react-hook-form";
import { IFormValues } from "./interface";
import { FormControl, MenuItem, Select } from "@mui/material";

const EmployeeDetails = ({ res }) => {
  const [checked, setChecked] = useState<boolean>(true);

  const { register } = useFormContext<IFormValues>();

  const [udepartment, setUdepartment] = useState<string>(res?.department_id);
  const [upositionId, setUpositionId] = useState<string>(res?.position_id);
  const [uentitleOt, setUentitleOt] = useState<string>(res?.entitle_ot);
  const [umeal, setUmeal] = useState<string>(res?.meal_allowance_paid);

  console.log(uentitleOt);
  React.useEffect(() => {
    setUdepartment(res?.department_id);
    setUpositionId(res?.position_id);
    setUentitleOt(res?.entitle_ot);
    setUmeal(res?.meal_allowance_paid);
  }, [res]);
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

            <FormControl className={styles.formControl}>
              <Select
                className={styles.select}
                {...register("department", { required: true })}
                value={udepartment}
                onChange={(e) => setUdepartment(e.target.value)}
              >
                <MenuItem className={styles.menuItem} value="">
                  <em>N/A</em>
                </MenuItem>
                <MenuItem className={styles.menuItem} value={4}>
                  Developer
                </MenuItem>
                <MenuItem className={styles.menuItem} value={3}>
                  Quality Controjk
                </MenuItem>
                <MenuItem className={styles.menuItem} value={2}>
                  Maintenance
                </MenuItem>
                <MenuItem className={styles.menuItem} value={1}>
                  Business Development
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <label htmlFor="positionId">Position</label>

            <FormControl className={styles.formControl}>
              <Select
                className={styles.select}
                {...register("positionId", { required: true })}
                value={upositionId}
                onChange={(e) => setUpositionId(e.target.value)}
              >
                <MenuItem className={styles.menuItem} value="">
                  <em>N/A</em>
                </MenuItem>
                <MenuItem className={styles.menuItem} value={3}>
                  Junior
                </MenuItem>
                <MenuItem className={styles.menuItem} value={2}>
                  Vice manager
                </MenuItem>
                <MenuItem className={styles.menuItem} value={1}>
                  Manager
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className={styles.containerCheckbox}>
          <div>
            <input
              type="checkbox"
              onClick={() => setChecked(!checked)}
              {...register("entitle_ot")}
              value={uentitleOt}
              onChange={(e) => setUentitleOt(e.target.value)}
            />
            <span>Entitled OT</span>
          </div>

          <div>
            <input
              type="checkbox"
              {...register("meal_allowance_paid")}
              value={umeal}
              onChange={(e) => setUmeal(e.target.value)}
            />
            <span>Meal Allowance Paid</span>
          </div>

          <div>
            <input
              type="checkbox"
              checked={checked}
              disabled
              {...register("operational_allowance_paid")}
            />
            <span>Operational Allowance Paid</span>
          </div>

          <div>
            <input
              type="checkbox"
              checked={checked}
              disabled
              {...register("attendance_allowance_paid")}
            />
            <span>Attendance Allowance Paid</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
