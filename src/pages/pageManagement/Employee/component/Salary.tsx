import React from "react";
import styles from "./scss/Salary.module.scss";
import InputText from "../../../../components/InputText";
import { useFormContext } from "react-hook-form";
import { IFormValues } from "../component/interface";

const Salary = ({ res }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Salary & Wages</div>
        <div className={styles.required}>
          <span>
            Required (<span className={styles.star}>*</span>)
          </span>
        </div>
      </div>

      <hr />

      <div className={styles.form}>
        <div>
          <div>
            <label htmlFor="salary">
              Basic Salary<span>*</span>
            </label>
            <InputText
              value={res?.basic_salary}
              type="number"
              label="salary"
              register={register}
              required
              placeholder="Rp"
            />
          </div>
          {errors.salary?.type === "required" && (
            <li>Please input Basic Salary</li>
          )}

          <div>
            <label htmlFor="salaryAudit">
              Basic Salary (Audit)<span>*</span>
            </label>
            <InputText
              value={res?.audit_salary}
              type="number"
              label="salaryAudit"
              register={register}
              required
              placeholder="Rp"
            />
          </div>
          {errors.salaryAudit?.type === "required" && (
            <li>Please input Basic Salary (Audit)</li>
          )}

          <div>
            <label htmlFor="safetyAmount">
              Safety Insurance Amount<span>*</span>
            </label>
            <InputText
              value={res?.safety_insurance}
              type="number"
              label="safetyAmount"
              register={register}
              required
              placeholder="Rp"
            />
          </div>
          {errors.safetyAmount?.type === "required" && (
            <li>Please input Safety Insurance Amount</li>
          )}

          <div>
            <label htmlFor="healthyAmount">
              Healthy Insurance Amount<span>*</span>
            </label>
            <InputText
              value={res?.health_insurance}
              type="number"
              label="healthyAmount"
              register={register}
              required
              placeholder="Rp"
            />
          </div>
          {errors.healthyAmount?.type === "required" && (
            <li>Please input Healthy Insurance Amount</li>
          )}

          <div>
            <label htmlFor="mealAllowance">
              Meal Allowance<span>*</span>
            </label>
            <InputText
              value={res?.meal_allowance}
              type="number"
              label="mealAllowance"
              register={register}
              required
              placeholder="Rp"
            />
          </div>
          {errors.mealAllowance?.type === "required" && (
            <li>Please input Meal Allowance</li>
          )}
        </div>
        {/* <div></div> */}
        {/* <button type="submit">btn</button> */}
      </div>
    </div>
  );
};

export default Salary;
