import React, { useState } from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/EmployeeInfor.module.scss";
import InputText from "../../../../components/InputText";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { IFormValues } from "./interface";
import BtnAdd from "./BtnAdd";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const gender = [
  { id: "0", name: "Male" },
  { id: "1", name: "Female" },
];

const marriage = [
  { id: "3", name: "Married with 1 kid" },
  { id: "2", name: "Single" },
  { id: "1", name: "Married" },
];

const items = [
  { label: "mobile", type: "number", value: "mobile_no" },
  { label: "tel", type: "number", value: "tel_no" },
  { label: "marriage", type: "text", form: "select" },
  { label: "bankCard", type: "number", value: "card_number" },
  { label: "bankAcc", type: "number", value: "bank_account_no" },
  { label: "bankName", type: "text", value: "bank_name" },
  { label: "familyCard", type: "number", value: "family_card_number" },
  { label: "safety", type: "number", value: "safety_insurance_no" },
  { label: "health", type: "number", value: "health_insurance_no" },
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
const EmployeeInfor = ({ res }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();

  const [ugender, setUgender] = useState<string>("");
  const [umarriage, setUmarriage] = useState<string>("");

  React.useEffect(() => {
    setUgender(res?.gender);
    setUmarriage(res?.marriage?.id);
  }, [res]);

  const handleTouchEnd = () => {
    console.log("Field touched");
  };

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

      <div className={styles.form}>
        {/* Column 1 */}
        <div>
          <div>
            {res ? (
              <div>
                <label>NIK :</label>
                <input
                  type="text"
                  className={styles.input}
                  disabled
                  value={res.staff_id}
                />
              </div>
            ) : (
              ""
            )}
          </div>

          <div>
            <div>
              <label htmlFor="name">
                Name<span>*</span> :
              </label>
              <InputText
                value={res ? res.name : ""}
                placeholder=""
                label="name"
                register={register}
                required
                type="text"
              />
              {/* <input
                type="text"
                {...register(
                  "inputTest",
                  { required: true },
                  { onBlur: () => console.log("Field blurred") }
                )}
              /> */}
            </div>
            {/* {errors[name] ? <li>Please InputTest </li> : ""} */}
            {errors.name?.type === "required" && <li>Please input Name</li>}
          </div>

          <div>
            <div>
              <label htmlFor="gender">
                Gender<span>*</span> :
              </label>

              <FormControl>
                <Select
                  className={styles.select}
                  {...register("gender", { required: true })}
                  value={ugender}
                  onChange={(e) => setUgender(e.target.value)}
                >
                  {gender.map((item, i: number) => (
                    <MenuItem
                      className={styles.menuItem}
                      value={item.id}
                      key={"gender" + i}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            {errors.gender?.type === "required" && <li>Please input Gender</li>}
          </div>

          <div>
            <div>
              <label htmlFor="motherName">Mother Name :</label>
              <InputText
                value={res?.mother_name}
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
                value={res?.dob}
                placeholder=""
                type="date"
                label="birth"
                register={register}
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="place">Place of birth :</label>
              <InputText
                value={res?.pob}
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
                value={res?.ktp_no}
                placeholder=""
                type="number"
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
                value={res?.nc_id}
                placeholder=""
                type="number"
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
                value={res?.home_address_1}
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
                value={res?.home_address_2}
                placeholder=""
                type="text"
                label="home2"
                register={register}
                required={false}
              />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className={styles.x}>
          <div>
            {texts.map((text: string, i: number) => (
              <div key={"label" + i}>
                <label htmlFor="">{text}</label>
              </div>
            ))}
          </div>

          <div>
            {items.map((item: any, i: number) => (
              <div key={"marriage" + i}>
                {item.form ? (
                  <FormControl className={styles.formControl}>
                    <Select
                      className={styles.select}
                      {...register("marriage", { required: true })}
                      value={umarriage}
                      onChange={(e) => setUmarriage(e.target.value)}
                    >
                      <MenuItem className={styles.menuItem}>
                        <em>N/A</em>
                      </MenuItem>
                      {marriage.map((item, i: number) => (
                        <MenuItem
                          className={styles.menuItem}
                          value={item.id}
                          key={"gender" + i}
                        >
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (
                  <InputText
                    value={""}
                    placeholder=""
                    type={item.type}
                    label={item.label}
                    register={register}
                    required={false}
                  />
                )}
                <div style={{ color: "black" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfor;
