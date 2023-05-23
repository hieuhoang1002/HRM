import axios from "axios";
import React, { useEffect } from "react";
import { API } from "../../../configAPI";
import styles from "../../scss/pageManagement//Employee/Employee.module.scss";
import { BsSearch } from "react-icons/bs";
import Item from "./Item";

const Employee = () => {
  useEffect(() => {
    axios({
      method: "get",
      baseURL: API,
      url: "/employee",
      headers: {
        Authorization: localStorage.getItem("TestToken"),
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>Employee Managenment</p>
        <div className={styles.search}>
          <div>
            <BsSearch className={styles.icon} />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={styles.containertable}>
        <Item />
      </div>
    </div>
  );
};

export default Employee;
