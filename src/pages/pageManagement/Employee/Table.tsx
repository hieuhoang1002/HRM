import React, { useEffect } from "react";
import styles from "../../scss/pageManagement/Employee/Table.module.scss";
import axios from "axios";
import { API } from "../../../configAPI";

const ths = [
  "NIK",
  "Name",
  "Gender",
  "Bank Card No.",
  "Bank Account No.",
  "Family Card No.",
  "Marriage Status",
  "Mother Name",
  "Place of birth",
  "Date of birth",
  "Home Address",
  "National Card ID No.",
  "Date Start",
  "First Contract",
  "Second Contract",
  "End Contract ",
  "Department",
  "Employee Type",
  "Salary Rp.",
  "Position",
  "O/T Paid",
  "Meal paid",
  "Meal Rp.",
  "Grading",
];

const Table = () => {
  useEffect(() => {
    axios({
      method: "get",
      baseURL: API,
      url: "/employee",
      headers: {
        Authorization: localStorage.getItem("CheckToken"),
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>check</th>
            {ths.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
