import React from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/Salary.module.scss";
import InputText from "../../../../components/InputText";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "./interface";

const Salary = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {};
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

      <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="salary">
              Basic Salary<span>*</span>
            </label>
            <InputText
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
      </form>
    </div>
  );
};

export default Salary;
