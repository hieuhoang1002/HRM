import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/Other.module.scss";
import InputText from "../../../../components/InputText";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { IFormValues } from "./interface";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { API } from "../../../../configAPI";
import { OPTIONSBENEFIT, OPTIONSGRADE } from "./OptionOther";

type OptionType = {
  id: number | null | undefined;
  value: string;
  label: string;
};

const Other = () => {
  const [selectedOptionGrade, setSelectedOptionGrade] =
    useState<OptionType>(null);
  const [selectedOptionBenefit, setSelectedOptionBenefit] =
    useState<OptionType>(null);

  const [dataGrade, setDataGrade] = useState([]);
  console.log(dataGrade);

  const animatedComponents = makeAnimated();
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {};

  const handleOptionGrade = (e) => {
    // console.log(e);
    if (e) {
      const id = e.id;
      axios({
        method: "GET",
        baseURL: API,
        url: `/benefit?grade_id=${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CheckToken"),
        },
      })
        .then((data) => setDataGrade(data.data.data))
        .catch((err) => err);
    } else if (e === null || e === undefined) {
      axios({
        method: "GET",
        baseURL: API,
        url: "/benefit?grade_id=undefined",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CheckToken"),
        },
      })
        .then((res) => {})
        .catch((err) => err);
    } else {
    }
  };
  const handleOptionBenefit = (e) => {
    console.log(e);
    setSelectedOptionBenefit(e);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Others</div>
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
            <label htmlFor="dateStart">Grade</label>
            <Select
              className={styles.selectGrade}
              isClearable
              defaultValue={selectedOptionGrade}
              onChange={handleOptionGrade}
              options={OPTIONSGRADE}
              placeholder=""
            />
          </div>

          {/* {dataGrade.map((data) => (
            <div>{data.id}</div>
          ))} */}

          <div>
            <label htmlFor="tel">Benefit</label>
            <Select
              className={styles.selectBenefit}
              isMulti
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={selectedOptionBenefit}
              onChange={handleOptionBenefit}
              placeholder=""
              options={OPTIONSBENEFIT}
            />
          </div>

          <div>
            <label htmlFor="remark">Remark</label>
            <textarea name="" id="remark"></textarea>
          </div>

          <div>
            <label htmlFor="">HRM User Account</label>
            <Select
              className={styles.selectAccount}
              placeholder=""
              isDisabled
            />
          </div>
        </div>
      </div>

      <div className={styles.form}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span>Document</span>
            <div className={styles.btn}>
              <label htmlFor="file" className={styles.upload}>
                <BsUpload /> Upload
              </label>
              <input type="file" id="file" />
            </div>
          </div>

          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Document Name</th>
                  <th>Created At</th>
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

        {/* <button type="submit">BTN</button> */}
        {/* <Add type="submit" /> */}
      </div>
    </div>
  );
};

export default Other;
