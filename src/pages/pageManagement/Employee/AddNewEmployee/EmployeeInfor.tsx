import React, { useState } from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/EmployeeInfor.module.scss";
import InputText from "../../../../components/InputText";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "./interface";
import Add from "./Add";

const labels = [
  "mobile",
  "tel",
  "marriage",
  "bankCard",
  "bankAcc",
  "bankName",
  "family",
  "safety",
  "health",
];

const texts = [
  "Mobile No. :",
  "Tel No. :",
  "Marriage Status :",
  "Bank Card No. :",
  "Bank Account No. :",
  "Bank Name :",
  "Family Card Number :",
  "Safety Insurance No. :",
  "Health Insurance No. :",
];
const EmployeeInfor = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

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

      <hr />

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <div>
            <div>
              <div>
                <label htmlFor="nik">NIK :</label>
                <InputText
                  placeholder=""
                  type="text"
                  register={register}
                  label="nik"
                  required={false}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="name">
                  Name<span>*</span> :
                </label>
                <InputText
                  placeholder=""
                  label="name"
                  register={register}
                  required
                  type="text"
                />
              </div>
              {errors.name?.type === "required" && <li>Please input Name</li>}
            </div>

            <div>
              <div>
                <label htmlFor="gender">
                  Gender<span>*</span> :
                </label>
                <select
                  className={styles.select}
                  {...register("gender", { required: true })}
                >
                  <option
                    value=""
                    disabled
                    selected
                    style={{ display: "none" }}
                  >
                    Choose Gender
                  </option>
                  <option value="0" className={styles.male}>
                    Male
                  </option>
                  <option value="1" className={styles.female}>
                    Female
                  </option>
                </select>
              </div>
              {errors.gender?.type === "required" && (
                <li>Please input Gender</li>
              )}
            </div>

            <div>
              <div>
                <label htmlFor="motherName">Mother Name :</label>
                <InputText
                  placeholder=""
                  label="motherName"
                  register={register}
                  required={false}
                  type="text"
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="birth">
                  Date of birth<span>*</span> :
                </label>
                <InputText
                  placeholder=""
                  type="date"
                  label="birth"
                  register={register}
                  required={false}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="place">Place of birth :</label>
                <InputText
                  placeholder=""
                  type="text"
                  label="place"
                  register={register}
                  required={false}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="ktp">
                  KTP No.<span>*</span> :
                </label>
                <InputText
                  placeholder=""
                  type="text"
                  label="ktp"
                  register={register}
                  required
                />
              </div>
              {errors.ktp?.type === "required" && <li>Please input KTP No</li>}
            </div>

            <div>
              <div>
                <label htmlFor="notional">
                  Notional Card ID<span>*</span> :
                </label>
                <InputText
                  placeholder=""
                  type="text"
                  label="notional"
                  register={register}
                  required
                />
              </div>
              {errors.notional?.type === "required" && (
                <li>Please input National Card ID</li>
              )}
            </div>

            <div>
              <div>
                <label htmlFor="home1">Home Address 1 :</label>
                <InputText
                  placeholder=""
                  type="text"
                  label="home1"
                  register={register}
                  required={false}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="home2">Home Address 2 :</label>
                <InputText
                  placeholder=""
                  type="text"
                  label="home2"
                  register={register}
                  required={false}
                />
              </div>
            </div>
          </div>

          <div className={styles.x}>
            <div>
              {texts.map((text: any) => (
                <div>
                  <label htmlFor="">{text}</label>
                </div>
              ))}
            </div>

            <div>
              {labels.map((label: any) => (
                <div>
                  <InputText
                    placeholder=""
                    type="text"
                    label={label}
                    register={register}
                    required={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* <button type="submit">BTN</button> */}
          {/* <Add type="submit" /> */}
        </div>
      </form>
      <Add onSubmit={handleSubmit(onSubmit)} />
    </div>
  );
};

export default EmployeeInfor;
