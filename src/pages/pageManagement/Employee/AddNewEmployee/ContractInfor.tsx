import React, { useState } from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/ContractInfor.module.scss";
import InputText from "../../../../components/InputText";
import { BsUpload } from "react-icons/bs";
import { useFormContext } from "react-hook-form";
import { IFormValues } from "./interface";
import { MenuItem, Select } from "@mui/material";

const EmployeeType = [
  { value: "0", label: "Permanent" },
  { value: "1", label: "Part-time" },
  { value: "2", label: "Contract" },
];

const ContractInfor = ({ res }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();

  const [utype, setUtype] = useState<string>(res?.type);

  React.useEffect(() => {
    setUtype(res?.type);
  }, [res]);

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
              value={res?.contract_start_date}
              placeholder=""
              type="date"
              register={register}
              label="dateStart"
              required={false}
            />
          </div>

          <div>
            <label htmlFor="type">
              Employee Type<span>*</span>
            </label>

            <Select
              className={styles.select}
              {...register("type", { required: true })}
              value={utype}
              onChange={(e) => setUtype(e.target.value)}
            >
              {/* <MenuItem value="" disabled selected style={{ display: "none" }}>
                Choose Type
              </MenuItem> */}
              {EmployeeType.map((options, i: number) => (
                <MenuItem
                  key={"employeeType" + i}
                  className={styles.menuItem}
                  value={options.value}
                >
                  {options.label}
                </MenuItem>
              ))}
            </Select>
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
