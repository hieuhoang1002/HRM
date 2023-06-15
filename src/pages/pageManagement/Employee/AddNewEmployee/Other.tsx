import React, { useEffect, useState } from "react";
import { BsUpload } from "react-icons/bs";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/Other.module.scss";
import { useFormContext } from "react-hook-form";
import { IFormValues } from "./interface";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { API } from "../../../../configAPI";
import { OPTIONSBENEFIT, OPTIONSGRADE } from "./OptionOther";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Theme, useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Other = () => {
  const [dataGrade, setDataGrade] = useState([]);
  console.log(dataGrade);

  const animatedComponents = makeAnimated();

  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const [benefit, setBenefit] = useState<any>();
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: API,
      url: "/benefit?grade_id=undefined",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("CheckToken"),
      },
    })
      .then((res) => setBenefit(res.data.data))
      .catch((err) => err);
  }, []);

  console.log(benefit);
  const handleOptionGrade = (e) => {
    // console.log(e.target.value);
    if (e) {
      const value = e.target.value;
      axios({
        method: "GET",
        baseURL: API,
        url: `/benefit?grade_id=${value}`,
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
  const handleOptionBenefit = (event: SelectChangeEvent<typeof personName>) => {
    console.log(event);
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className={styles.container}>
      {/* {benefit?.map((item) => (
        <div style={{ color: "black" }}>{item.name}</div>
      ))} */}
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
            <label htmlFor="gradeId">Grade</label>

            <Select
              className={styles.selectGrade}
              {...register("gradeId")}
              onChange={handleOptionGrade}
            >
              {OPTIONSGRADE.map((options) => (
                <MenuItem className={styles.menuItem} value={options.value}>
                  {options.label}
                </MenuItem>
              ))}
            </Select>
          </div>

          {/* {dataGrade.map((data) => (
            <div>{data.id}</div>
          ))} */}

          <div>
            <label htmlFor="benefit">Benefit</label>

            <Select
              className={styles.selectBenefit}
              {...register("benefit")}
              onChange={handleOptionBenefit}
              multiple
              value={personName}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {benefit?.map((options) => (
                <MenuItem
                  className={styles.menuItem}
                  key={options.id}
                  value={options.name}
                >
                  {options.name}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div>
            <label htmlFor="remark">Remark</label>
            <textarea name="" id="remark" {...register("remark")}></textarea>
          </div>

          <div>
            <label htmlFor="">HRM User Account</label>
            {/* <Select
              className={styles.selectAccount}
              placeholder=""
              isDisabled
            /> */}
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
