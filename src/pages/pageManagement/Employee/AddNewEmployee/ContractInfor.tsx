import React, { useState } from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/ContractInfor.module.scss";
import InputText from "../../../../components/InputText";
import { BsUpload } from "react-icons/bs";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { IFormValues } from "./interface";

const ContractInfor = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Contract Information</div>
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
            <label htmlFor="dateStart">
              Date Start<span>*</span>
            </label>
            <InputText
              placeholder=""
              type="date"
              register={register}
              label="dateStart"
              required={false}
            />
          </div>

          <div>
            <label htmlFor="employeeType">
              Employee Type<span>*</span>
            </label>
            <select
              className={styles.select}
              {...register("employeeType", { required: true })}
            >
              <option value="" disabled selected style={{ display: "none" }}>
                Choose Type
              </option>
              <option value="Permanent" className={styles.male}>
                Permanent
              </option>
              <option value="Part-time" className={styles.parttime}>
                Part-time
              </option>
              <option value="Contract" className={styles.contract}>
                Contract
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.form}>
        <div className={styles.contract}>
          <div className={styles.header}>
            <span>CONTRACT:</span>
          </div>

          <div className={styles.configImg}>
            Please upload pdf, png, xlsx, docx file format!
          </div>

          <hr />

          <div className={styles.formContract}>
            <div className={styles.inputContract}>
              <div>
                <label htmlFor="dateContract">Contract Date</label>
                <input type="date" id="dateContract" />
              </div>
              <div>
                <label htmlFor="nameContract">Contract Name</label>
                <input type="text" id="nameContract" />
              </div>
              <div className={styles.btn}>
                <div>
                  <label htmlFor="file" className={styles.upload}>
                    <BsUpload /> Upload File
                  </label>
                  <input type="file" id="file" />
                </div>
                <button className={styles.add}>Add</button>
              </div>
            </div>

            {/* <div className={styles.x}></div> */}

            <div className={styles.tableContract}>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Contract Name</th>
                    <th>Sign Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sản phẩm A</td>
                    <td>1/1/2023</td>
                    <td>100.000 đồng</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <button type="submit">BTN</button> */}
        {/* <Add type="submit" /> */}
      </div>
    </div>
  );
};

export default ContractInfor;
