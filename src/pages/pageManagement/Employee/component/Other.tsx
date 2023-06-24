import React, { useEffect, useState } from "react";
import { BsUpload } from "react-icons/bs";
import styles from "./scss/Other.module.scss";
import { useFormContext } from "react-hook-form";
import { IFormValues } from "./interface";
import axios from "axios";
import { API } from "../../../../API/configAPI";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { IoTrashOutline } from "react-icons/io5";

export const OPTIONSGRADE = [
  { id: 8, value: 8, label: "Tabitha Kutch PhD" },
  { id: 6, value: 6, label: "Melissa Johnson" },
  { id: 1, value: 1, label: "Danial Stoltenberg" },
];

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

const Other = ({ res }) => {
  const [dataGrade, setDataGrade] = useState([]);

  const [personName, setPersonName] = React.useState<string[]>([]);

  const [benefit, setBenefit] = useState<any>();

  const [ugrade, setUrade] = useState<string>(res?.grade_id);
  const [uremark, setUremark] = useState<string>(res?.remark);

  React.useEffect(() => {
    setUrade(res?.grade_id);
    setUremark(res?.remark);
  }, [res]);
  const { register } = useFormContext<IFormValues>();

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

  const handleOptionGrade = (e) => {
    if (e) {
      const value = e.target.value;
      setUrade(value);
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
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
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
            <label htmlFor="gradeId">Grade</label>

            <Select
              className={styles.selectGrade}
              {...register("gradeId")}
              value={ugrade}
              onChange={handleOptionGrade}
            >
              {OPTIONSGRADE.map((options) => (
                <MenuItem className={styles.menuItem} value={options.value}>
                  {options.label}
                </MenuItem>
              ))}
            </Select>
          </div>

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
            <textarea
              name=""
              id="remark"
              {...register("remark")}
              value={uremark}
              onChange={(e) => setUremark(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="">HRM User Account</label>
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
                  <td>
                    <IoTrashOutline
                      style={{ color: "red", fontSize: "15px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
